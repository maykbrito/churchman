const express = require('express')
const router = express.Router()
const validator = require('../../libs/Validator')

//Members Model
const Members = require('../../models/Members')

// @route   GET api/members
// @desc    Get All Members
// @access  Public
router.get('/:church_id', (req, res) => {
    
    Members.find({church_id: req.params.church_id})
    .sort({name: 1})
    .then((members) => res.json(members))
})

// @route   POST api/members
// @desc    Post a Members
// @access  Public
router.post('/:church_id', (req, res) => {

    const newItem = new Members({
        church_id: req.params.church_id,
        name: req.body.name.trim()
    })

    newItem.save().then(member => res.json(member))
})

// @route   DELETE api/members
// @desc    Delete a Members
// @access  Public
router.delete('/:id', (req, res) => {
    Members.findById(req.params.id)
    .then(member => member.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})



module.exports = router