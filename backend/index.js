require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
//app.use('/',require ('./controllers/'))
//app.use('/', require('./controllers/'))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//dc Connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))