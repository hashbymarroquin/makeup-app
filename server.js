var express = require('express')
var logger = require('morgan')
var axios = require('axios')
var bodyParser = require('body-parser')
var app = express()

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')
app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(request,response){
   response.render('home.ejs')
})


app.post('/results', function(request, response){
   
   var userInput = request.body.search
   
   // var url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
   // axios.get(url)
   // .then(function(res){
   //     console.log(res.data)
   //     response.render('results.ejs', {data: res.data})
   // })
   // .catch(function(err){
   //     console.log(err)
   // })
})

var port =  process.env.PORT || 8080

app.listen(port,function(){
   console.log('App running on port' + port)
})