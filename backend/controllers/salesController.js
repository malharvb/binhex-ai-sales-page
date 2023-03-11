const Sale = require('../models/salesModel')

const mongoose = require('mongoose')

async function getSalesPage(req, res) {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "Invalid id"})
        return
    }

    const salesPage = await Sale.findOne({_id: id})

    if (!salesPage) {
        return res.status(404).json({'error': 'Invalid request'})
    }

    res.status(200).json(salesPage)
}

async function addSalesPage(req, res) {
    const {companyName, pocName, designation, logo, header, subHeader, desc, urls} = req.body
    
    const sale = await Sale.create({companyName, pocName, designation, logo, header, subHeader, desc, urls})

    res.status(201).json(sale)
}

module.exports = {getSalesPage, addSalesPage}