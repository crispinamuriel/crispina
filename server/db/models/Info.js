const Sequelize = require('sequelize')
const db = require('../db')

const Info = db.define('info', {
  title: Sequelize.TEXT,
  content: Sequelize.TEXT,
  imgUrl: Sequelize.STRING
})

module.exports = Info
