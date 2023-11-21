const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    name: String,
    rarity: String,
    price: number
})

const Card =  mongoose.model('Card, cardSchema')

module.exports = card
