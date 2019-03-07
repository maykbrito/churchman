const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const MembersSchema = new Schema({
    church_id: 	{ type: Schema.Types.ObjectId, required: true },
	name: 		{ type: String, required: true }
})

module.exports = Members = mongoose.model('members', MembersSchema)