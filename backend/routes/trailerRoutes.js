const express = require('express')
const router = express.Router()
const { getTrailers, createTrailer, updateTrailer, deleteTrailer } = require('../controllers/trailerController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getTrailers)

router.post('/', protect, createTrailer)

router.put('/:id', protect, updateTrailer)

router.delete('/:id', protect, deleteTrailer)

module.exports = router