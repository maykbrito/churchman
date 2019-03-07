const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const RecordsSchema = new Schema({
    church_id: 		{ type: Schema.Types.ObjectId, required:true},
	date: 			{ type: Date, required: true },
	hour: 			{ type: Date, required: true},
	description:    { type: String, required: true},
	participants:	[ { type: Schema.Types.ObjectId, required: true } ]
})

module.exports = Records = mongoose.model('records', RecordsSchema)