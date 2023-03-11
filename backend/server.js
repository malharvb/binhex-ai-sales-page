const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')

const salesRoutes = require('./routes/salesRoute')

app.use(express.json())

app.use('/sales', salesRoutes)

mongoose.set('strictQuery', false)
//The mongodb URI is only specified here for ease of assesment otherwise it would be put in a .env file 
mongoose.connect('mongodb+srv://malhar:malhar@sales-cluster.afo6ivk.mongodb.net/?retryWrites=true&w=majority')
.then( () => {
    app.listen(port, () => {
    console.log('Server Running')
    })
})
.catch(
    (err) => console.log(err)
)
