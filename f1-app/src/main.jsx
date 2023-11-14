import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App.jsx'
import Navbar from './components/Navbar.jsx'
import Drivers from './components/Drivers.jsx'
import Footer from './components/Footer.jsx'
import './libraries/bootstrap/bootstrap.min.css'
import './libraries/bootstrap/bootstrap.min.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Navbar />
        <Router>
          <App />
        </Router>
      <Footer />
    </div>
  </React.StrictMode>,
)
