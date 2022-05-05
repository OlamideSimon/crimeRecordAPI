const mongoose = require('mongoose')

const crimeSchema = mongoose.Schema(
    {
        crime: {
            type: String,
            enum: ['suspicious activity', 'threat', 'incidence report'],
            required: [true, 'Report cannot be made without a crime']
        },
        location: {
            type: String,
            required: [true, 'Report cannot be made without a location']
        },
        actions: {
            type: String,
            enum: ['sentence/fine', 'judicial actions', 'in-progress'],
            default: 'in-progress'
        },
        status: {
            type: String,
            enum: ['completed', 'not completed', 'ongoing'],
            default: 'not completed'
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('Crimes', crimeSchema)