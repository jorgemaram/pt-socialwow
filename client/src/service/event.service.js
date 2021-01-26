import axios from 'axios'

export default class EventService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/event`,
        })
    }

    getEvents = () => this.apiHandler.get('/getAllEvents')
    saveEvent = eventInfo => this.apiHandler.post('/newEvent', eventInfo)
}