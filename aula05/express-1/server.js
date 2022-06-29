import express from "express"
import {readFile} from 'fs'

const app = express()

//Middleware para arquivos estáticos (css, img, js, etc)
//passamos o nome do diretorio que será publico
app.use(express.static('public'))

// Rotas
app.get('/', (req, res) => {
   readFile('index.htm', 'utf-8', (err, data) =>{
    res.send(data)
   })
})

app.get('/alunos', (req, res) => {
    res.send('Página dos Alunos')
})

app.get('/alunos/:idAluno/', (req, res) =>{
    res.send(req.params)
})

app.listen(3030, () => console.log('Running server'))