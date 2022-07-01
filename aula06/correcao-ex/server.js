import express from "express"
import { readFile } from 'fs'
import dirName from "./dirname.js"

const app = express()

//Middleware para arquivos estáticos (css, img, js, etc)
//passamos o nome do diretorio que será publico
app.use(express.static('public'))

// Rotas
app.get('/', (req, res) => {
    //res.send('D:\Users\Ricardo\Desktop\PRIMEIROS PASSOS-FULL STACK\node.js\TT-node.js\aula06\correcao-ex>')
    res.sendFile(`${dirName()}/index.htm`)
})

app.get('/contato', (req, res) => {
    //res.send('D:\Users\Ricardo\Desktop\PRIMEIROS PASSOS-FULL STACK\node.js\TT-node.js\aula06\correcao-ex>')
    readFile(`${dirName()}/contato.htm`)
})

app.listen(3030, () => console.log('Running server'))