import { createServer } from 'http'

createServer((req, res) => {
  res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8'})

  
  res.write('Bem vindo - Turma da Aula 04')

  res.end()
}).listen(3030, () => {
  console.log('Running server!')
})