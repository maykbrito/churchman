const express = require('express')
const router = express.Router()

const Ministries = require('../../models/Ministries')

router.get('/:church_id', (req, res) => {
    Ministries.find()
    .then(ministry => res.json(ministry))
})

router.post('/:church_id', (req, res) => {
    const ministry = req.body

    const newMinistry = new Ministries({
        church_id: req.params.church_id,
        name: ministry.name,
        people: ministry.people 
    })

    newMinistry.save().then(ministry => res.json(ministry))
})

router.delete('/:id', (req, res) => {
    Ministries.findById(req.params.id)
    .then(ministry => ministry.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success: false, message: err}))
})

module.exports = router