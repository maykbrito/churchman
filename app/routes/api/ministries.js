const express = require('express')
const router = express.Router()

const Ministries = require('../../models/Ministries')


// @route   GET api/ministries
// @desc    Get All Ministries
// @access  Public
router.get('/:church_id', (req, res) => {
    Ministries.find()
    .then(ministry => res.json(ministry))
})

// @route   POST api/ministries
// @desc    Post a Ministry
// @access  Public
router.post('/:church_id', (req, res) => {
    const ministry = req.body

    const newMinistry = new Ministries({
        church_id: req.params.church_id,
        name: ministry.name,
        people: ministry.people 
    })

    newMinistry.save().then(ministry => res.json(ministry))
})

// @route   DELETE api/ministries
// @desc    Delete a Ministry
// @access  Public
router.delete('/:id', (req, res) => {
    Ministries.findById(req.params.id)
    .then(ministry => ministry.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success: false, message: err}))
})

module.exports = router