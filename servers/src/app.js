let express = require('express')
const app = express()

app.get('/status', function (req,res){
    res.send('Hello nodejs server 1234')
})

let port = 8081
app.listen(port, function(){
    console.log('server runing on ' + port)
})