/*
    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

const express = require("express");
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);

app.listen(3333);