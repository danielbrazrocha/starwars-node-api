const { response } = require('express');
var service = require('../services/service');

module.exports = function(server){
    server.get('/getCharData/:idChar', service.getCharData);
    server.get('/getPlanetsData/:idPlanet', service.getPlanetsData);
    server.get('/getStarshipData/:idSS', service.getStarShipData);
};