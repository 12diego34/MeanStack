angular.module('bookSearchClient', ["ngRoute"])
.controller('IndexController', IndexController)
.controller('SearchBookController', SearchBookController)
.controller('ShowBookController', ShowBookController)
.controller('SaveBookController', SaveBookController);

function IndexController($scope, $http) {
    $http.get('/books/collection')
        .success(function(data, status, headers, config) {
            $scope.books = data.books;
        });
}

function SaveBookController($scope, $http, $location) {
    $scope.form = {};
    $scope.saveBook = function () {
        $http.post('/books/save', $scope.form)
            .success(function(data) {
                $location.path('/');
            });
    };
}

function ShowBookController($scope, $http, $routeParams) {
    $scope.showBook = function(){
        var id = this.resultado.id;
        $http.get('/books/show/' + id)
            .then(function(result){
                console.log(JSON.stringify(result.data.book, null, 2));
                var book = result.data.book;
                var $title = $('#modal-info-libro .modal-title .titulo');
                var modal_body_selector = '#modal-info-libro .modal-body ';
                $title.empty().append("<em>"+book.title+"</em>");
                $(modal_body_selector+'.thumb').prop('src', book.imageLinks.medium);
                $(modal_body_selector+'.descripcion').empty().append(book.description);
                var values = [book.subtitle, book.authors, book.categories, book.pageCount, 
                            book.publishedDate, book.publisher, book.industryIdentifiers[1].identifier, 
                            book.language, book.infoLink, book.preview_link];
                var field_names = ['Subtitulo: ', 'Autor/es: ', 'Categorías: ', 'Páginas: ',
                                'Año de publicación: ', 'Editorial: ', 'ISBN: ','Lenguaje: ', 
                                'Más información: ', 'Preview: '];
                $(modal_body_selector+'.info tbody').empty();
                $.each(values, function(i){
                    if (values[i]){    
                        var link = '<a href="'+values[i]+'">Haz click aquí</a>';
                        var valor = String(values[i]).includes('http') ? link : values[i];
                        var markup_data = '<tr><td><strong>'+field_names[i]+'</strong></td><td>'+valor+'</td></tr>';
                        $(modal_body_selector+'.info tbody').append(markup_data);
                    }
                });
                var markup_compra = '';
                $('.compra').empty();
                if(book.saleInfo.retailPrice){
                    var url = 'https://play.google.com/store/books/details?id='+book.id+
                        '&amp;rdid=book-'+book.id+'&amp;rdot=1&amp;source=gbs_atb&amp;pcampaignid=books_booksearch_atb';
                    markup_compra = '<h4 class="precio text-center"> Precio: $'+book.saleInfo.retailPrice.amount+'</h4>'+
                                    '<a class="btn btn-success" href="'+url+'">'+
                                        '<span class="glyphicon glyphicon-shopping-cart"></span> Comprar'+
                                    '</a><br><br>';
                }else{
                    markup_compra = '<h4 class="precio text-center"> No disponible </h4><br><br>';
                }
                $('.compra').append(markup_compra);
                $('#modal-info-libro').modal('show');
            }, function(error){
                console.log("error!", error.responseText);
            });
    }
}

function SearchBookController($scope, $http, $routeParams) {
    $scope.form = {};
    $scope.resultados = {};
    $scope.busqueda = false;
    $scope.sendForm = function () {
        $scope.buscando = true;
        //console.log('[SearchBookController]: ', $scope.form);
        $http.post('/books/search', $scope.form)
            .then(function(result) {
                $scope.busqueda = true;
                $scope.buscando = false;
                $scope.resultados = result.data.resultados;
            }, function(){
                $scope.buscando = false;
                console.log('SearchBookController: hubo un error');
            });
    };
}



//PARTE DE LIBRO
var Libro = require('./modelo/libro');

// Obtiene todos los objetos Libro de la base de datos
module.exports.getLibro = function (req, res){
	Libro.find(
		function(err, libro) {
			if (err)
				res.send(err)
					res.json(libro); // devuelve todas los Libros en JSON		
				}
			);
}

// Guarda un objeto Libro en base de datos
module.exports.setLibro = function(req, res) {

		// Creo el objeto Libro
		Libro.create(
			{nombre : req.body.nombre,
				isbn: req.body.isbn, 
				preciolocal: req.body.preciolocal,
				autor: req.body.autor,
				//portada: req.body.portada,
				editorial: req.body.editorial,
				ranking: req.body.ranking,
				genero: req.body.genero,
				paginas: req.body.paginas

			}, 
			function(err, libro) {
				if (err)
					res.send(err);
				// Obtine y devuelve todos los libros tras crear uno de ellos
				Libro.find(function(err, libro) {
				 	if (err)
				 		res.send(err)
				 	res.json(libro);
				});
			});
	}

// Modificamos un objeto Libro de la base de datos
module.exports.updateLibro = function(req, res){
	Libro.update( {_id : req.params.libro_id},
					{$set:{nombre : req.body.nombre,isbn: req.body.isbn, 
				preciolocal: req.body.preciolocal,autor: req.body.autor,
				//portada: req.body.portada,
				editorial: req.body.editorial,ranking: req.body.ranking,
				genero: req.body.genero,paginas: req.body.paginas

					}}, 
					function(err, libro) {
						if (err)
							res.send(err);
				Libro.find(function(err, libro) {
				 	if (err)
				 		res.send(err)
				 	res.json(libro);
				});
			});
	}

// Elimino un objeto Libro de la base de Datos
module.exports.removeLibro = function(req, res) {
	Libro.remove({_id : req.params.libro_id}, function(err, libro) {
		if (err)
			res.send(err);
			Libro.find(function(err, libro) {
				if (err)
					res.send(err)
				res.json(libro);
			});
		});
}