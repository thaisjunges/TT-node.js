import express from "express"
import bodyParser from 'body-parser'
import con from './connection.js'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const mockDepartamentos = require("./mock/departamentos.mock.json") // use the require method

const app = express()

//Middleware para arquivos estáticos (css, img, js, etc)
//passamos o nome do diretorio que será publico
app.use(express.static('public'))
//Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Lista os departamentos
app.get('/departamentos', (req, res) => {
   con.connect((err) => {
    if (err) {
        throw err
    }
   })

   con.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome', (err, result) => {
    res.send(result)
   })
})

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req, res) => {
    const {idDepartamento} = req.params

    const resultado = mockDepartamentos.filter((depto) => {
        return depto.id == idDepartamento
    })

    res.send(resultado)
})

// Insere um departamento
app.post('/departamentos', (req, res) => {
    const { nome, sigla } = req.body
    //Antes vamos validar se os dados vieram corretamente
    if (nome != undefined && sigla != undefined) {
     res.send(`Insere departamento: ${nome} - ${sigla}`)   
    } else {
        res.send('Algo deu errado')
    }

    
  
})

//Altera por completo os dados de um departamento
app.put('/departamentos', (req, res) => {
    res.send('Altera por completo um departamento.')
})

// Altera parcialmente um departamento
app.patch('/departamentos/:idDepartamento', (req, res) => {
    res.send('Altera parcialmente um departamento.')
})

// Remove um departamento
app.delete('/departamentos/:idDepartamento', (req, res) => {
    res.send('Remove um departamento.')
})
app.listen(3030, () => console.log('Running server'))