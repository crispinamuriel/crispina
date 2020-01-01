const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/contacts', require('./contacts.js'))
router.use('/projects', require('./projects'))
router.use('/info', require('./info'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
