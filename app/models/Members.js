const mongoose = require('mongoose');

const { Schema } = mongoose;

const MembersSchema = new Schema({
  church_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

const Members = mongoose.model('members', MembersSchema);
module.exports = Members;
