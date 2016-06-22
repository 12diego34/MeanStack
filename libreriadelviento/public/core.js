angular.module('MainApp', [])
/*
function mainController($scope, $http) {
	$scope.newPersona = {};
	$scope.personas = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/persona').success(function(data) {
		$scope.personas = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a una persona
	$scope.registrarPersona = function() {
		$http.post('/api/persona', $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarPersona = function(newPersona) {
		$http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarPersona = function(newPersona) {
		$http.delete('/api/persona/' + $scope.newPersona._id)
		.success(function(data) {
			$scope.newPersona = {};
			$scope.personas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPerson = function(persona) {
		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	};
}
*/
function libroController($scope, $http) {
	$scope.newLibro = {};
	$scope.libros = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/libro').success(function(data) {
		$scope.libros = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a un libro
	$scope.registrarLibro = function() {
		$http.post('/api/libro', $scope.newLibro)
		.success(function(data) {
				$scope.newLibro = {}; // Borramos los datos del formulario
				$scope.libros = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de un libro
	$scope.modificarLibro = function(newLibro) {
		$http.put('/api/libro/' + $scope.newLibro._id, $scope.newLibro)
		.success(function(data) {
				$scope.newLibro = {}; // Borramos los datos del formulario
				$scope.libros = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto libro conocido su id
	$scope.borrarLibro = function(newLibro) {
		$http.delete('/api/libro/' + $scope.newLibro._id)
		.success(function(data) {
			$scope.newLibro = {};
			$scope.libros = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectLibro = function(libro) {
		$scope.newLibro = libro;
		$scope.selected = true;
		console.log($scope.newLibro, $scope.selected);
	};
}