import express from "express"
import bodyParser from 'body-parser'
import con from './connection.js'
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from 'swagger-ui-express'

const app = express()
const options = {
    definition: {
      info: {
        title: 'API Node JS', // (obrigatório)
        version: '1.0.0', // (obrigatório)
      },
    },
    // Path da aplicação principal (onde estão as rotas documentadas)
    apis: ['server.js'],
  };
  // Adicionamos o gerador de documentação em uma const
  const swaggerSpec = swaggerJSDoc(options);


//Middleware para arquivos estáticos (css, img, js, etc)
//passamos o nome do diretorio que será publico
app.use(express.static('public'))
//Configuramos o servidor para utilizar o middleware do body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerSpec));




/**
* @swagger
*
* /departamentos:
*   get:
*     description: Lista todos departamentos
*     produces:
*       - text/html
*     responses:
*       200:
*         description: Exibe todos departamentos em um vetor
*/
app.get('/departamentos', (req, res) => {
   con.query('SELECT sigla FROM DEPARTAMENTOS ORDER BY nome', (err, result) => {
    res.send(result)
   })
})

// Lista um departamento especifico
app.get('/departamentos/:idDepartamento', (req, res) => {
    const {idDepartamento} = req.params

    //Implemente uma query que retore o departamento conforme o ID passado na rota
    con.query(`SELECT * FROM DEPARTAMENTOS WHERE id_departamento = ${idDepartamento}`, (err, result) => {
        res.send(result)
      })
    })


    
/**
 * @swagger
 *
 * /departamentos:
 *   post:
 *     description: Insere departamento
 *     produces:
 *       - text/json
  *     parameters:
 *       - name: sigla
 *         description: sigla do depto.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Insere um depto. no banco
 */
app.post('/departamentos', (req, res) => {
    const { nome, sigla } = req.body
    //Antes vamos validar se os dados vieram corretamente
    if (nome != undefined && sigla != undefined) {
        //Implemente a inserçao do Depto. no banco de dados
        con.query(`INSERT INTO DEPARTAMENTOS (nome, sigla) VALUES ('${nome}', '${sigla}')`, (err, result) => {
            res.send(result)
        })
    } else {
        res.send({
            "message": "Nome ou Sigla nao foram enviados"
        })
    }
})


/**
* @swagger
*
* /departamentos:
*   put:
*     description: Altera por completo dados de um departamento
*     produces:
*       - text/html
*     responses:
*       200:
*         description: Altera por completo dados de um departamento
*/
app.put('/departamentos/:idDepartamento', (req, res) => {
    const {idDepartamento} = req.params
    const {nome,sigla} = req.body

    if (nome != undefined && sigla != undefined){
        con.query(`UPDATE DEPARTAMENTOS SET nome = '${nome}', sigla = '${sigla}' WHERE id_departamento = ${idDepartamento}`, (err, result) => {
            res.send(result)
          })
    } else{
        res.send({
            "message": "Nome ou Sigla nao foram enviados"
        })
    }
    
})



// Altera parcialmente um departamento
app.patch('/departamentos/:idDepartamento', (req, res) => {
    res.send('Altera parcialmente um departamento.')
})



/**
* @swagger
*
* /departamentos:
*   delete:
*     description: Remove um departamento
*     produces:
*       - text/html
*     responses:
*       200:
*         description: Remove um departamento
*/
app.delete('/departamentos/:idDepartamento', (req, res) => {
    const {idDepartamento} = req.params
  con.query(`DELETE FROM DEPARTAMENTOS WHERE id_departamento = ${idDepartamento}`, (err, result) => {
    res.send(result)
  })
})


app.listen(3030, () => console.log('Running server'))