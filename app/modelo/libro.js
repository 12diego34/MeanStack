var mongoose = require('mongoose');

module.exports = mongoose.model('Libro', {
	nombre: String,
	preciolocal:float,
	autor:String,
	//portada:??
	editorial:String,
	ranking:float
});