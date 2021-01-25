import axios from 'axios'

export default class EventService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/event',
            //baseURL: `${process.env.REACT_APP_API_URL}/events`,
        })
    }

    getEvents = () => this.apiHandler.get('/getAllEvents')
    getEvent = eventId => this.apiHandler.get(`/getOneEvent/${eventId}`)
    saveEvent = eventInfo => this.apiHandler.post('/newEvent', eventInfo)
    editEvent = (eventId, event) => this.apiHandler.put(`/editEvent/${eventId}`, event)
    deleteEvent = eventId => this.apiHandler.delete(`/deleteEvent/${eventId}`)

}