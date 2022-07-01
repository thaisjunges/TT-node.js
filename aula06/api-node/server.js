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
    //mock do resultado
    const departamentos = [
        { id: "1", nome: "Recursos Humanos", sigla: "RH"},
        { id: "2", nome: "Tecnologia da Informação", sigla: "TI" },
        { id: "3", nome: "Departamento Pessoal", sigla: "DP" },
    ]

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req, res) => {
    // implementar um filter dentro do mock para encontrar o depto pelo ID
    // Ex. se a request for para: http://localhost:3030/departamentos/1
    // a resposta deve ser:
    // {"id": "1","nome": "Recursos Humanos","sigla": "RH"}
    // SE o id nao for encontrado, deve retornar um obejto vazio: {}
    console.log(req.params.idDepartmentos);

    res.send(mockDepartamentos)
})

    res.send(departamentos)
})


app.listen(3030, () => console.log('Running server'))