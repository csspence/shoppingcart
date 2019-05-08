//Bring in libraries
const express = require('express')
// const db = require('database.js')
const app = express()
const port = 3000

//Use Libraries
app.use(express.static('public'))

//Middleware


//Routes
app.get('/', (req, res) => res.send('Hello World!'))


//Listener
app.listen(port, () => console.log(`Example app listening on port ${port}!`))