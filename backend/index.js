require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use(express.json())
app.use('/location',require ('./controllers/location'))
//app.use('/', require('./controllers/'))
app.use(cors())


app.get('/', (req, res) => {
    res.send('Welcome to the best travel log app out there!')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))
