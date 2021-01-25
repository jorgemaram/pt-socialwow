import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from '@emotion/styled'

import Home from './pages/Home/Home'
import EventList from './pages/Event/Event-list'
import EventDetails from './pages/Event/Event-details'
import EventForm from './pages/Event/New-event-form'
import EventEditForm from './pages/Event/Edit-event-form'



function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
