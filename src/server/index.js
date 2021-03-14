var application_key = "e551af024a02fedf5d569451c5969dc6"

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
   })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

var application_key = "e551af024a02fedf5d569451c5969dc6"

app.get('/all', function (req, res) {
    res.send({
        'key': application_key

    })
})
