const express = require('express')
const knex = require('./database')
const app = express()

app.listen(3333,()=>{
    console.log('server is running on http:localhost://3333')
})

app.get('/users', (req, res) =>
    knex('users').then((results) =>
      res.json(results)
    )
)