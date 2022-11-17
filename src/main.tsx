import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Bounce } from './Bounce'
import { Flash } from './Flash'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    {/* <Bounce/> */}
    {/* <App /> */}
    <Flash />
  </React.StrictMode>
)
