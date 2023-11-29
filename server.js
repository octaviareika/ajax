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

const upload = multer({storage}).single('arquivo'); // single é um arquivo por vez

app.post(   '/upload', (req, res) => {
    upload(req, res, erro => { // requisicao, resposta e erro	
        if(erro){
            return res.end('Ocorreu um erro.') // res.end = retorna uma resposta
        }
        res.end('Concluído com sucesso.')
    })
})

app.use(bodyParser.json()); // converte em objeto json

app.get('/teste', (req, res) => res.send('Ok')); // quando o arquivo teste for invocado, manda uma resposta
app.listen(8081, () => 
    console.log("Executando....")
)