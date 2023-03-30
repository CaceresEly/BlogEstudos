const Sequelize = require('sequelize')
const sequelize = new Sequelize('usuarios', 'root', '582200', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}