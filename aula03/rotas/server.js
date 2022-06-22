import { createServer } from 'http'



//req: request (requisicao)
//res: response (resposta)
createServer((req, res) => {
    //ao chegar uma requisicao quero
    res.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'})

    //todas requisicoes que chegarem baterao no req.url (ex. /contato)
    if(req.url === '/contato') {
        res.write('Contato do site')
    }

    if (req.url.indexOf('/clientes') != -1) {
        console.log('Entrou no CLIENTES')
        res.write('Clientes da empresa')
    }

    console.log(req.url)

    res.end()
}).listen(3030, () => {
    console.log('Runing server!')
})