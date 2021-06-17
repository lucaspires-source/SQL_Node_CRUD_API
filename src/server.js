const express = require('express')
const routes = require('./routes')
const app = express()
app.use(routes)
app.listen(3333,()=>{
    console.log('server is running on http:localhost://3333')
})

