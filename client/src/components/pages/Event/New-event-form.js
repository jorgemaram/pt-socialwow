import React, { Component } from 'react'
import moment from 'moment'
import { Form, Button } from 'react-bootstrap'
import styled from '@emotion/styled'
import EventService from './../../../service/event.service'


const Error = styled.div`
    background-color: red;
    color:white;
    padding: 1rem;
    width: 100%;
    text-align:center;
    margin-bottom: 2rem;
`

class EventForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            event: {
                title: '',
                color: '',
                start: moment(this.props.startDate, 'YYYY-MM-DD'),
                end: moment(this.props.endDate, 'YYYY-MM-DD'),
            },
            error: false,
            errorMessage: '',
        }
        this.eventService = new EventService()

    }

    handleInputChange = e => this.setState({ event: { ...this.state.event, [e.target.name]: e.target.value } })
    handleStartTimeDateChange = e => {
        this.state.event.start.hour(e.target.value.split(':')[0])
        this.state.event.start.minutes(e.target.value.split(':')[1])
    }
    handleEndTimeDateChange = e => {
        this.state.event.end.hour(e.target.value.split(':')[0])
        this.state.event.end.minutes(e.target.value.split(':')[1])
    }

    handleSubmit = e => {

        e.preventDefault()

        if (this.state.event.title === '' || this.state.event.color === '') {
            this.setState({ error: true, errorMessage:'Rellena todos los campos' })
            return;
        }
        if (this.state.event.start.isSameOrAfter(this.state.event.end)) {
            this.setState({ error: true, errorMessage: 'Hora de fin no puede ser anterior a la de inicio' })
            return;
        }
        this.setState({ error: false })

        this.eventService
            .saveEvent(this.state.event)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }




    render() {

        return (
            <>
                <div>
                    {this.state.error ? <Error>{this.state.errorMessage}</Error> : null}
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" name="title" value={this.state.event.title} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="color">
                            <Form.Label>Color</Form.Label>
                            <Form.Control as="select" defaultValue="blue" name="color" value={this.state.event.color} onChange={this.handleInputChange} >
                                <option>-- Seleccione --</option>
                                <option value="yellow">Amarillo</option>
                                <option value="blue">Azul</option>
                                <option value="silver">Gris</option>
                                <option value="orange">Naranja</option>
                                <option value="black">Negro</option>
                                <option value="red">Rojo</option>
                                <option value="pink">Rosa</option>
                                <option value="green">Verde</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="startStr">
                            <Form.Label>Hora de inicio</Form.Label>
                            <Form.Control type="time" name="startStr" value={this.state.startStr} onChange={this.handleStartTimeDateChange} />
                        </Form.Group>
                        <Form.Group controlId="endStr">
                            <Form.Label>Hora de fin</Form.Label>
                            <Form.Control type="time" name="endStr" value={this.state.endStr} onChange={this.handleEndTimeDateChange} />
                        </Form.Group>
                        <Button className="btn-success" type="submit">Guardar evento</Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default EventForm