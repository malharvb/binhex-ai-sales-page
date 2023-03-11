const express = require('express')
const router = express.Router()

const {getSalesPage, addSalesPage} = require('../controllers/salesController')

router.get('/:id', getSalesPage)

router.post('/', addSalesPage)


module.exports = router