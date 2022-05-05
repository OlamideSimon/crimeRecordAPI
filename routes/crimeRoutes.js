const express = require('express')
const { addCrime, getCrime, updateCrime, deleteCrime } = require('../controllers/crimeController')
const { protect } = require('../middlewares/authMiddleware')
const { grantAccess } = require('../middlewares/grantAccess')

const router = express.Router()

router.route('/').get(protect, getCrime).post(addCrime)
router.route('/:id').post(protect, grantAccess('updateAny', 'crime'), updateCrime).delete(protect, grantAccess('deleteAny', 'crime'), deleteCrime)

module.exports = router