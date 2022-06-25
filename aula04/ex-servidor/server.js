import { createServer } from 'http'
import { readFile } from 'fs'


//req: request (requisicao)
//res: response (resposta)
createServer((req, res) => {
    //ao chegar uma requisicao quero
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
    let page = ''
console.log(req.url);
    switch (req.url) {
        case '/':
            page = 'index.html'
            break;
        case '/contatos':
            page = 'contatos.html'
            break;
        case '/clientes':
            page = 'clientes.html' 
            break;
            default:
            page = '404.html'
            break;
           

    }

    readFile(page, 'utf-8', (err, data) => {
        res.write(data)
        res.end()
    })

}).listen(3030, () => {
    console.log('Runing server!')
})