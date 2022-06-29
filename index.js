require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Que Sera Sera')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page<br/> vaya con dios!</h1>')
})

app.listen(process.env.PORT)
