const router = require('express').Router()
const {Contact} = require('../db/models')

// GET /api/contacts
router.get('/', async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({})
    res.json(contacts)
  } catch (error) {
    next(error)
  }
})

module.exports = router
