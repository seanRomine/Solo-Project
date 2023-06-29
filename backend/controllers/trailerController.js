const asyncHandler = require('express-async-handler')

const Trailer = require('../models/trailerModel')
const User = require('../models/userModel')

const getTrailers = asyncHandler(async (req, res) => {
    const trailers = await Trailer.find({ user: req.user.id })

    res.status(200).json(trailers)
})

const createTrailer = asyncHandler(async (req, res) => {
    // If this is not commented, it procs an error every time
    // if(!req.body.name) {
    //     res.status(400)
    //     throw new Error('Please include trailer info')
    // }

    const trailer = await Trailer.create({
        name: req.body.name,
        status: req.body.status,
        location: req.body.location,
        orderNumber: req.body.orderNumber,
        checked: req.body.checked,
        user: req.user.id
    })

    res.status(200).json(trailer)
})

const updateTrailer = asyncHandler(async (req, res) => {
    const trailer = await Trailer.findById(req.params.id)

    if (!trailer) {
        res.status(400)
        throw new Error('Trailer Not Found')
    }

    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found or authorized')
    }

    if (trailer.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedTrailer = await Trailer.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedTrailer)
})

const deleteTrailer = asyncHandler(async (req, res) => {
    const trailer = await Trailer.findById(req.params.id)

    if (!trailer) {
        res.status(400)
        throw new Error('Trailer Not Found')
    }

    const user = await User.findById(req.user.id)

    if (!user) {
        res.status(401)
        throw new Error('User not found or authorized')
    }

    if (trailer.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await trailer.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTrailers,
    createTrailer,
    updateTrailer,
    deleteTrailer,
}