const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChurchsSchema = new Schema({
  name: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const Churchs = mongoose.model('churchs', ChurchsSchema);

module.exports = Churchs;
