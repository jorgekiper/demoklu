import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Link,Route, Routes, useParams, Outlet } from 'react-router-dom'

import {KluApp} from './KluApp'

import './assets/theme/base/klu-colors-v1.0.0.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <KluApp/>
  </BrowserRouter>
)
