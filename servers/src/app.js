let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status', function (req,res){
    res.send('Hello nodejs server belong to nitiphumi')
})

app.get('/hello/:xxx', function(req,res){
    console.log('hello - ' + req.params.xxx)
    res.send('say hello with ' + req.params.xxx)
})

app.get('/user/:userId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน')
})

app.get('/users', function (req, res) {
    res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด')
})

app.post('/user/', function (req, res) {
    res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body))
})

app.post('/user/', function (req, res) {
    res.send('ทำการแก้ไขผู้ใช้งาน' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

app.put('/user/:userId', function(req, res) {
    res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + JSON.stringify(req.body.name))
})

app.delete('/user/:userId', function(req, res) {
    res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

let port = 8081
app.listen(port, function(){
    console.log('server runing on ' + port)
})