//Variáveis para inicialização do servidor NODE
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var router = require('./routes/router');
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');


//Inicialização do servidor NODE
initializeServer();
function initializeServer () {
    var server = express();

    addMidlleware(server); //Adicionando middlewares para as chamadas de rotas
    router(server); //Adicionando as chamadas de rotas no servidor NODE



    server.listen(41200, function () {
        console.log("CI&T-2022 - Starwars consumer API is running on port 41200");
    });

}

//Função para adicionar middlewares
function addMidlleware(server){
    server.use(cors()); //Libera acesso de para request externas
    server.use(bodyParser.json()); //Fazer o parse da request-response para json
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));  //Utilizar o swagger para documentação da API
}