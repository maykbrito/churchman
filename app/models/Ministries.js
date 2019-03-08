const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MinistriesSchema = new Schema({
    church_id: 		{ type: Schema.Types.ObjectId, required:true},
	name: 			{ type: String, required: true},
	people: 	    [ { type: Schema.Types.ObjectId } ]
})

module.exports = Ministries = mongoose.model('ministries', MinistriesSchema)