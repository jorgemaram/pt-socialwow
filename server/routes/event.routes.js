const express = require('express')
const router = express.Router()
const Event = require('../models/event.model')


router.get('/getAllEvents', (req, res) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneEvent/:event_id', (req, res) => {

    Event
        .findById(req.params.event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newEvent', (req, res) => {

    Event
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editEvent/:event_id', (req, res) => {

    Event
        .findByIdAndUpdate(req.params.event_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/deleteEvent/:event_id', (req, res) => {

    Event
        .findByIdAndDelete(req.params.event_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router