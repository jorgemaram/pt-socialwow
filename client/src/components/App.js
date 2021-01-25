import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from '@emotion/styled'

import SocialWowCalendar from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <SocialWowCalendar/>
    </div>
  );
}

export default App;
