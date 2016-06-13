var mongoose = require('mongoose');

module.exports = mongoose.model('Libro', {
	isbn:int,
	nombre: String,
	preciolocal:float,
	autor:String,
	//portada:??
	editorial:String,
	ranking:float,
	genero:String,
	paginas:int
});