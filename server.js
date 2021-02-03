const express = require('express'); 
const app = express();
const bodyParser =require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.set('views', 'views')

const caminho = require('./routes') 
app.use(caminho);

app.listen(1900, () => {
    console.log("Servidor ok")
} )


