const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecordsSchema = new Schema({
    church_id: 		{ type: Schema.Types.ObjectId, required:true},
	date: 			{ type: Date, required: true, default:Date.now },
	hour: 			{ type: Date },
	description:    { type: String},
	participants:	[ { type: Schema.Types.ObjectId } ]
})

module.exports = Records = mongoose.model('records', RecordsSchema)