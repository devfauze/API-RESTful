//[✅]Config inicial
require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//[✅]Configuração de leitura de JSON
//[✅]Middlewares
app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

//[✅]Rotas da api
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

//[✅]Rotas - inicial e endpoint
app.get('/', (req, res) => {
    //mostrar req
    res.json({ message: 'Oi Express!' })
})


//[✅]Porta de acesso ao código
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.vusq4r7.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))
