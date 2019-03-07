const express = require('express')
const router = express.Router()

//Events Model
const Events = require('../../models/Events')

// @route   GET api/events
// @desc    Get All Events
// @access  Public
router.get('/', (req, res) => {
    Events.find()
    .sort({date: -1})
    .then((events) => res.json(events))
})

// @route   POST api/events
// @desc    Post a Events
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Events({
        name: req.body.name,
        date: req.body.date,
        hour: req.body.hour,
        place: req.body.place
    })

    newItem.save().then(event => res.json(event))
})

// @route   DELETE api/events
// @desc    Delete a Events
// @access  Public
router.delete('/:id', (req, res) => {
    Events.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router