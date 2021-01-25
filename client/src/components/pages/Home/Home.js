import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

export default class SocialWowCalendar extends Component {

    handleDateClick = (arg) => {
        alert(arg.dateStr)
    }


    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={this.handleDateClick}
                eventContent={renderEventContent}
                firstDay='1'
                events={[
                    { title: 'event 1', date: '2021-01-01' },
                    { title: 'event 2', date: '2021-02-02' }
                ]}
            />

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