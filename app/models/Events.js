const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventsSchema = new Schema({
  church_id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  hour: { type: Date },
  place: { type: String },
});

const Events = mongoose.model('events', EventsSchema);

module.exports = Events;
