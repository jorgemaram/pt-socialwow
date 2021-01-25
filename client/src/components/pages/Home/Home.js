import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import Popup from '../../shared/Popup'
import EventForm from '../Event/New-event-form'
import EventService from '../../../service/event.service'

import { Button, Modal, Toast } from 'react-bootstrap'

export default class SocialWowCalendar extends Component {

    constructor() {
        super()
        this.state = {
            events: [],
            dateDayClicked: '',
            showModal: false

        }

        this.eventService = new EventService()
        
    }

    componentDidMount = () => this.refreshEvents()
        
    
    refreshEvents = () => {
        this.eventService
            .getEvents()
            .then(res => this.setState({ events: res.data }))
            .catch(err => console.log(err))
    }

    handleDateClick = (arg) => {
        this.setState({dateDayClicked: arg.dateStr})
        this.handleModal(true)
        //alert(arg.dateStr)
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <Button onClick={() => this.handleModal(true)} variant="primary" size="sm">New event</Button>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={this.handleDateClick}
                    eventContent={renderEventContent}
                    firstDay='1'
                    events={this.state.events}
                />
                <Popup show={this.state.showModal} handleModal={this.handleModal} title={`Añadir Cita para el ${this.state.dateDayClicked}`}>
                    <EventForm closeModal={() => this.handleModal(false)} updateList={this.refreshEvents} startDate={this.state.dateDayClicked}/>
                </Popup>
            </>

        )
    }
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}