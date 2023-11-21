const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(express.static('.')); 
app.use(bodyParser.urlencoded({
    extended : true
}))


const multer = require('multer');

const storage = multer.diskStorage({ // passa um objeto como parâmetro
    destination: function(req, file, callback) { // parametros vao ser a requisição, o arquivo e a callbacks. 
        //Esta parte determina o diretório para o qual os arquivos serão salvos.
        callback(null, "./upload"); 

    },

    filename: function(req, res, erro){
        callback(null, `${Date.now()}-${file.originalname}`)
    }
})

app.use(bodyParser.json()); // converte em objeto json

app.get('/teste', (req, res) => res.send('Ok')); // quando o arquivo teste for invocado, manda uma resposta
app.listen(8081, () => 
    console.log("Executando....")
)