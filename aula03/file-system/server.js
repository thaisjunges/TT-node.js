import { createServer } from 'http'
import { readFile } from 'fs'



//req: request (requisicao)
//res: response (resposta)
createServer((req, res) => {
    //ao chegar uma requisicao quero
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })

    readFile('home.html', 'utf-8', (err, data) => {
        console.log('Lendo o arquivo!')
        res.write(data)
        res.end()
      })

    
}).listen(3030, () => {
    console.log('Runing server!')
})