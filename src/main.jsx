import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ParticleBackground from './particle/ParticleBackground.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParticleBackground>
    <App />
    </ParticleBackground>
  </React.StrictMode>,
)
