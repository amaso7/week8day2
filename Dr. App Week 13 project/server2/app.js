const express = require('express')
const app = express()
const models = require('./models')
const cors = require('cors')


app.use(cors())
/*
const pgp = require('pg-promise')()
const connectionString = 'postgres://fxyqgzxg:i66ItBKFaiFO581GDTU_YGxpIDwbjsRQ@fanny.db.elephantsql.com/fxyqgzxg'

const db = pgp(connectionString)
app.get('/hello', (req, res) => {
    res.send('Hello ')
})
app.get('/api/drs-with-pg-promise', (req, res) =>{

})
*/
app.get('/api/Drs', (req, res) => {

    models.Dr.findAll({})
    .then(drs =>{
        res.json(drs)
    })
})

//local host 5000
app.listen(5000, (req, res) => {
    console.log('Server is running...')
})