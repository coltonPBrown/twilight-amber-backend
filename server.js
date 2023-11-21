const express = require('express');
const mongoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 3000

const dbUrl = process.env.url || 'mongodb://localhost:27017/twilight-db'

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

////////////////

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology:true})

const db = mongoose.connection

db.on(error, console.error.bind(console, 'MongoDB connection error:'))
db.once('open', ()=> {
    console.info('Connected to MongoDB')
})
