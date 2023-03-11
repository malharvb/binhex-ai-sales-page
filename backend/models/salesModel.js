const mongoose = require('mongoose')

const salesSchema = new mongoose.Schema({
    companyName: {
        type: String,
        unique: true,
        required: true
    },
    pocName: String,
    designation: String,
    logo: String,
    header: String,
    subHeader: String,
    desc: String,
    urls: [String]
})

module.exports = mongoose.model('Sale', salesSchema)