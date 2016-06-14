var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');
var libros = require('google-books-search');
var Libro = mongoose.model('Libro');

module.exports = mongoose.model('Libro', {
	isbn:Schema.Types.Number,
	nombre: Schema.Types.String,
	preciolocal:Schema.Types.Number,
	autor:Schema.Types.String,
	//portada:Schema.Types.??
	editorial:Schema.Types.String,
	ranking:Schema.Types.Number,
	genero:Schema.Types.String,
	paginas:Schema.Types.Number,
});