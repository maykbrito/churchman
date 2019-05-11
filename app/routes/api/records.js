// express
const express = require('express');

const router = express.Router();

const Record = require('../../models/Records');

// @route   GET api/records
// @desc    Get All Records
// @access  Public
router.get('/:church_id', (req, res) => {
  Record.find({ church_id: req.params.church_id })
    .sort({ date: -1 })
    .then(routes => {
      res.json(routes);
    });
});

// @route   POST api/records
// @desc    Post a Records
// @access  Public
router.post('/:church_id', (req, res) => {
  const record = req.body;

  const newRecord = new Record({
    church_id: req.params.church_id,
    date: record.date,
    hour: record.hour,
    description: record.description,
    participants: record.participants,
  });

  newRecord.save().then(recordSaved => res.json(recordSaved));
});

// @route   DELETE api/records
// @desc    Delete a Record
// @access  Public
router.delete('/:id', (req, res) => {
  Record.findById(req.params.id)
    .then(record => record.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, message: err }));
});

module.exports = router;
