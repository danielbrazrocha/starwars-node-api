
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
        //verify if the id is valid number
        if (isNaN(request.params.idPlanet)) {
            response.status(400).json({
                message: 'Invalid Planet ID'
            });
            return;
        }
                


        axios.get(urlBase + `${'/planets/' + request.params.idPlanet}`)
            .then(resp => {
                response.status(200).json(
                    resp.data

                );
            })
            .catch(error => {
                //send 404 if not found with a custom message
                response.status(404).json({
                    message: 'Planet not found'
                });
                //console.log(error);
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