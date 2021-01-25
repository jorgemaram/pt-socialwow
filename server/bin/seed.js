const mongoose = require('mongoose')
const Event = require('../models/event.model')

const dbtitle = 'socialwow'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

Event.collection.drop()

const events = [
    {
        "title": "Reunión contabilidad",
        "description": "Reunión equipo contabilidad para debatir presupuestos.",
        "start": "2021-01-26",
        "color": 'red',
        "start": "2021-01-26T12:30:00Z",
        "end": "2021-01-26T14:30:00Z",
    },
    {
        "title": "Reunión IT",
        "description": "Reunión equipo IT para comentar trabajo semanal.",
        "start": "2021-01-25",
        "color": 'green',
        "start": "2021-01-25T10:00:00Z",
        "end": "2021-01-25T10:30:00Z",
    },
    {
        "title": "Reunión administración",
        "description": "Reunión equipo administración para cuadrar nóminas.",
        "start": "2021-01-25",
        "color": 'blue',
        "start": "2021-01-25T10:30:00Z",
        "end": "2021-01-25T11:30:00Z",
    },
    {
        "title": "Reunión previa fin de semana",
        "description": "Reunión equipo para planes fin de semana.",
        "start": "2021-01-29",
        "color": 'orange',
        "start": "2021-01-29T15:30:00Z",
        "end": "2021-01-29T16:45:00Z",
    }
]


Event
    .create(events)
    .then(allEventsCreated => {
        console.log(`Created ${allEventsCreated.length} events`)
        mongoose.connection.close();
    })
    .catch(err => console.log('It was a mistake,', err))