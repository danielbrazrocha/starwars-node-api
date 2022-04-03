
let urlBase = 'https://swapi.dev/api/';
const axios = require('axios');

module.exports = {
    getCharData: function (request, response) {
        axios.get(urlBase + `${'/people/' + request.params.idChar}`)
            .then(resp => {
                response.json(
                    resp.data

                );
            })
            .catch(error => {
                console.log(error);
            });
    },

    //A GET Route to get one planet by ID
    getPlanetsData: function (request, response) {
        axios.get(urlBase + `${'/planets/' + request.params.idPlanet}`)
            .then(resp => {
                response.json(
                    resp.data

                );
            })
            .catch(error => {
                console.log(error);
            });
    },

    //A GET Route to get all the planets
    getAllPlanetsData: function (request, response) {
        axios.get(urlBase + `${'/planets/'}`)
            .then(resp => {
                response.json(
                    resp.data

                );
            })
            .catch(error => {
                console.log(error);
            });
    },

    getStarShipData: function (request, response) { },

};