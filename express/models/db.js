const Sequelize = require('sequelize')
//Conexão banco de dados
const sequelize = new Sequelize('postagens', 'root', '582200', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}