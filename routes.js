const express = require('express');
const caminho = express.Router(); 
const sql = require('./model/crud/index');

caminho.get("/", sql.selectItens);

caminho.post("/", sql.saveItens);

module.exports = caminho;

