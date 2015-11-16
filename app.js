var express       = require('express')
var app           = express()
var logger        = require('morgan')
var bodyParser    = require ('body-parser')
var mongoose      = require ('mongoose')

// Mongoose connection goes here

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req,res){
  var collection = [
  {name: "Cafe Hasbro", address: "12 West Street"},
  {name: "Cafe Fisher Price", address: "80 North Avenue"},
  {name: "Cafe Bandai", address: "99 South Boulevard"}
]
  var data = { title: "The Home Page",
              message: "The Cafe Lists",
              cafes: collection
  }
  res.render('index', data)
})

app.get('/about', function(req,res){
  var data = { title: "About Us",
              message: "Eddie and his boys Seri and Alex are some cool guys with attitudes who talk about cafes on a Yu-Gi-Oh! page."
            }
  res.render('about', data)
})

app.get('/contact', function(req,res){
  var collection = [
    {name: "Eddie Jung", email: "EddieTheMan@bro.com"},
    {name: "Seri Orfali", email: "SeriMasterCoder@coolman.com"},
    {name: "Alex Juneja", email: "AlexDude@guy.edu"}
  ]
  var data = { title: "Contact Us",
              message: "Feel free to contact us by e-mail!",
              users: collection
            }
  res.render('contact', data)
})

var cafeRoutes = require('./routes/cafeRoutes.js')
app.use('/cafes', cafeRoutes)

app.listen(3000)
console.log('Server is now running on port 3000!')
