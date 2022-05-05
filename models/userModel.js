const mongoose = require('mongoose')
const { ranks, states } = require('../utils/enums')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Passsword is required']
    },
    rank: {
        type: String,
        enum: ranks,
        required: [true, 'rank is required']
    },
    district: {
        type: String,
        enum: states,
        required: [true, 'district is required']
    }
})

module.exports = mongoose.model('User', userSchema)