const express = require('express')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8888

app.use(express.json) // đọc ddataa từ client
app.use(express.urlencoded({extended : true}))

app.use('/', (req, res) => {res.send('SERVER ONNN')} )

app.listen(port, ()=> {
    console.log('server running on port : '+ port);
})



