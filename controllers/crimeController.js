const asyncHandler = require('express-async-handler')
const Crime = require('../models/crimeModel')

// @desc    Set crimes
// @route   POST /api/crimes
// @access  Public
const addCrime = asyncHandler( async(req, res) => {
    const { crime, location, actions } = req.body

    if(!crime || !location) {
        res.status(400)
        throw new Error('All fields are required')
    }

    const details = await Crime.create({
        crime: crime.toLowerCase(),
        location: location.toLowerCase(),
        actions
    })

    if(details) {
        res.status(201).send('Crime added successfully!!!!')
    } else {
        res.status(400)
        throw new Error('Encountered some errors')
    }
})


// @desc    Get crimes
// @route   GET /api/crimes
// @access  Private
const getCrime = asyncHandler( async(req, res) => {
    const crime = await Crime.find({location: req.user.district})

    res.status(200).json(crime)
})


// @desc    Update crime
// @route   POST /api/crimes/id
// @access  Private
const updateCrime = asyncHandler( async(req, res) => {
    const crime = await Crime.findById(req.params.id)

    if(!crime) {
        res.status(400)
        throw new Error('Report not found')
    }

    if(!req.user) {
        res.status(400)
        throw new Error('User not found')
    }

    if(crime.location.toLowerCase() !== req.user.district.toLowerCase()) {
        res.status(400)
        throw new Error('You cannot update reports outside your district')
    }

    const update = await Crime.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(update)
})


// @desc    Delete crime
// @route   DELETE /api/crimes/id
// @access  Private
const deleteCrime = asyncHandler( async(req, res) => {
    const crime = await Crime.findById(req.params.id)

    if(!crime) {
        res.status(400)
        throw new Error('Report not found')
    }

    if(!req.user) {
        res.status(400)
        throw new Error('User not found')
    }

    if(crime.location.toLowerCase() !== req.user.district.toLowerCase()) {
        res.status(400)
        throw new Error('You cannot delete reports outside your district')
    }

    const delCrime = await Crime.findByIdAndDelete(req.params.id)

    res.status(200).json(delCrime)
})

module.exports = {
    addCrime,
    getCrime,
    updateCrime,
    deleteCrime
}