const { STRING } = require('sequelize')
const db = require('./db')
const Users = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    }, 
    idade: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    }
})

module.exports = Users
//Post.sync({force: true})