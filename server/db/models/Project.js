const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  imageUrl: Sequelize.STRING,
  projectUrl: Sequelize.STRING,
  gitHubUrl: Sequelize.STRING
})

module.exports = Project
