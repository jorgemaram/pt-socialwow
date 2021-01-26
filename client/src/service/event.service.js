import axios from 'axios'

export default class EventService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/event',
            //baseURL: `${process.env.REACT_APP_API_URL}/events`,
        })
    }

    getEvents = () => this.apiHandler.get('/getAllEvents')
    saveEvent = eventInfo => this.apiHandler.post('/newEvent', eventInfo)
}