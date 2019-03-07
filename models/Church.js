const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const ChurchSchema = new Schema({
    name: 		{ type: String, required: true },
	created: 	{ type: Date, default: Date.now }
})

module.exports = Church = mongoose.model('church', ChurchSchema)