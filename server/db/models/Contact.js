const Sequelize = require('sequelize')
const db = require('../db')

const Contact = db.define('contact', {
  title: Sequelize.STRING,
  imgUrl: Sequelize.STRING,
  url: Sequelize.STRING
})

module.exports = Contact
