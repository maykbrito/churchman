const mongoose = require('mongoose');

const { Schema } = mongoose;

const RecordsSchema = new Schema({
  church_id: { type: Schema.Types.ObjectId, required: true },
  date: { type: Date, required: true, default: Date.now },
  hour: { type: Date },
  description: { type: String },
  participants: [{ type: Schema.Types.ObjectId }],
});

const Records = mongoose.model('records', RecordsSchema);

module.exports = Records;
