const express = require('express')
const router = express.Router()

//Churchs Model
const Churchs = require('../../models/Churchs')

// @route   GET api/churchs
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Churchs.find()
    .sort({date: -1})
    .then((churchs) => res.json(churchs))
})

// @route   POST api/churchs
// @desc    Post a Churchs
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Churchs({
        name: req.body.name
    })

    newItem.save().then(church => res.json(church))
})

// @route   DELETE api/churchs
// @desc    Delete a Churchs
// @access  Public
router.delete('/:id', (req, res) => {
    Churchs.findById(req.params.id)
    .then(church => church.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router