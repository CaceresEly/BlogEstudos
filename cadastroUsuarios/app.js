const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const Users = require('./models/Post')
const app = express()

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Configuração do body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', function(req, res){
    Users.findAll().then(function(users){
        res.render('./layouts/home', {users: users})
    })
})

app.get('/add', function(req, res){
    res.render('./layouts/formUsuarios')
})

app.post('/usuarios', function(req, res){
    Users.create({
        nome: req.body.nome,
        idade: req.body.idade,
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Houve um erro: ' + erro)
    })
})

app.listen(8080, function(){
    console.log('Servidor rodando!')
})