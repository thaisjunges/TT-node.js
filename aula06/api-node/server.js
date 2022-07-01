import express from "express"
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const mockDepartamentos = require("./mock/departamentos.mock.json") // use the require method

const app = express()

//Middleware para arquivos estáticos (css, img, js, etc)
//passamos o nome do diretorio que será publico
app.use(express.static('public'))

// Rotas
app.get('/', (req, res) => {
    res.send('rota barra')
})

app.post('/', (req, res) => {
    res.send('request feita via POST')
})

// Lista os departamentos
app.get('/departamentos', (req, res) => {
    res.send(mockDepartamentos)
})

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req, res) => {
    // implementar um filter dentro do mock para encontrar o depto pelo ID
    // Ex. se a request for para: http://localhost:3030/departamentos/1
    // a resposta deve ser:
    // {"id": "1","nome": "Recursos Humanos","sigla": "RH"}
    // SE o id nao for encontrado, deve retornar um obejto vazio: {}
    console.log(req.params.idDepartamento);

    res.send(mockDepartamentos)
})

app.listen(3030, () => console.log('Running server'))