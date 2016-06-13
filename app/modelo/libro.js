var mongoose = require('mongoose');

module.exports = mongoose.model('Libro', {
	isbn:Number,
	nombre: String,
	preciolocal:Number,
	autor:String,
	//portada:??
	editorial:String,
	ranking:Number,
	genero:String,
	paginas:Number,
});