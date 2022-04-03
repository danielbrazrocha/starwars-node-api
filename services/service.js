
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

    getPlanetsData: function (request, response) { },

    getStarShipData: function (request, response) { },

};