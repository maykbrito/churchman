const express = require('express');

const router = express.Router();

const Events = require('../../models/Events');

// @route   GET api/events
// @desc    Get All Events
// @access  Public
router.get('/:church_id', (req, res) => {
  Events.find({ church_id: req.params.church_id })
    .sort({ date: -1 })
    .then(events => res.json(events));
});

// @route   POST api/events
// @desc    Post a Events
// @access  Public
router.post('/:church_id', (req, res) => {
  const event = req.body;

  const newItem = new Events({
    church_id: req.params.church_id,
    name: event.name,
    date: event.date,
    hour: event.hour,
    place: event.place,
  });

  newItem.save().then(eventSaved => res.json(eventSaved));
});

// @route   DELETE api/events
// @desc    Delete a Events
// @access  Public
router.delete('/:id', (req, res) => {
  Events.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
