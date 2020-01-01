const router = require('express').Router()
const {Info} = require('../db/models')

// GET /api/info
router.get('/', async (req, res, next) => {
  try {
    const info = await Info.findAll({})
    res.json(info)
  } catch (error) {
    next(error)
  }
})

module.exports = router
