import { createServer } from 'http'
import getClientsByCity from './clients.js'


//req: request (requisicao)
//res: response (resposta)
createServer((req, res) => {
    //ao chegar uma requisicao quero
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })

    console.log(getClientsByCity('Porto Alegre'))

    //quero que me mostre na tela
    res.write('<h1>Clientes de Porto Alegre</h1>')

    //retorna um array
    getClientsByCity('Porto Alegre').map(client => {
        res.write(`Nome: ${client.name} - Cidade: ${client.city} <br>`)
    })

    res.end()
}).listen(3030, () => {
    console.log('Runing server!')
})