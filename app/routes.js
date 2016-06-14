var Libro = require('./modelo/libro');
//var Persona = require('./modelo/persona');
var Controller = require ('./controller');

module.exports = function(app) {
/*
	// devolver todos los Personas
	app.get('/api/persona', Controller.getPersona);
	// Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);
	*/
	// application 
	app.get('/', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});

	app.get('/libro', function(req, res) {
		res.sendfile('./angular/indexanterior.html'); // Carga única de la vista
	});
	app.get('/api/libro', Controller.getLibro);
	app.post('/api/libro', Controller.setLibro);
	app.put('/api/libro/:libro_id', Controller.updateLibro);
	app.delete('/api/libro/:libro_id', Controller.removeLibro);
};