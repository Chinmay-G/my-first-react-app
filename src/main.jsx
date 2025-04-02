import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import RandomNumber from './RandomNumber.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <RandomNumber />
  </StrictMode>,
)
