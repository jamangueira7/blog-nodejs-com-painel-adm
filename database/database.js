const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'postgres', 'docker', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;
