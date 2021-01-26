import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { formatDate } from '@fullcalendar/core'

import Popup from '../../shared/Popup'
import EventForm from '../Event/New-event-form'
import EventService from '../../../service/event.service'

export default class SocialWowCalendar extends Component {

    constructor() {
        super()
        this.state = {
            events: [],
            dateDayClicked: '',
            titleDayClicked: '',
            showModal: false

        }

        //set events in 2-digit format
        this.eventTimeFormat = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
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

        this.setState({
            dateDayClicked: arg.dateStr,
            titleDayClicked: formatDate(arg.dateStr, {
                month: 'long',
                year: 'numeric',
                day: 'numeric',
                locale: 'es'
            })
        })
        this.handleModal(true)
    }


    handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={this.handleDateClick}
                    eventTimeFormat={this.eventTimeFormat}
                    firstDay='1'
                    events={this.state.events}
                />
                <Popup show={this.state.showModal} handleModal={this.handleModal} title={`Añadir cita para el ${this.state.titleDayClicked}`}>
                    <EventForm closeModal={() => this.handleModal(false)} updateList={this.refreshEvents} startDate={this.state.dateDayClicked} />
                </Popup>
            </>

        )
    }
}
