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
    const {idDepartamento} = req.params

    const resultado = mockDepartamentos.filter((depto) => {
        return depto.id == idDepartamento
    })

    res.send(resultado)
})
app.listen(3030, () => console.log('Running server'))