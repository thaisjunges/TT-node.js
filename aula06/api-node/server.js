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

// Lista todos os departamentos
app.get('/departamentos', (req, res) => {
    res.send(mockDepartamentos)
})

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req, res) => {
    // var info = mockDepartamentos.filter(x => x.id === "1")
    // console.log(info);  //Você consegue listar os dados que você filtrou no console do servidor
    // res.send(info)  //Você consegue listar os dados que você filtrou no navegador/request feita

    const {idDepartamento} = req.params
    return mockDepartamentos.filter(i => i.id == id)

})

app.listen(3030, () => console.log('Running server'))