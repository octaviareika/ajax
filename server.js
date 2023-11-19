const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.static('.')); 
/*app.use(bodyParser.urlencoded({
    extended : true
}));*/

app.use(bodyParser.json()); // converte em objeto json

app.get('/teste', (req, res) => res.send('Ok')); // quando o arquivo teste for invocado
app.listen(8081, () => 
    console.log("Executando....")
)