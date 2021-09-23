const express = require("express")

const path = require("path")

//create server object
const app = express()

//add default endpoint in get request
//auto load index page 
//if have res, always need req
//dirname is path to server
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, "../index.html"))
})

//environmental variables
//env sensitive information not shared with github
const port = process.env.PORT || 4400

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

//check if server can run node server/index.js

