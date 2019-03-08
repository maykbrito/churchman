const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChurchsSchema = new Schema({
    name: 		{ type: String, required: true },
	created: 	{ type: Date, default: Date.now }
})

module.exports = Churchs = mongoose.model('churchs', ChurchsSchema)