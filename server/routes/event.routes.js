const express = require('express')
const router = express.Router()
const Event = require('../models/event.model')


router.get('/getAllEvents', (req, res) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newEvent', (req, res) => {

    Event
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router