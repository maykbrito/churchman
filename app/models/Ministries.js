const mongoose = require('mongoose');

const { Schema } = mongoose;

const MinistriesSchema = new Schema({
  church_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  people: [{ type: Schema.Types.ObjectId }],
});

const Ministries = mongoose.model('ministries', MinistriesSchema);

module.exports = Ministries;
