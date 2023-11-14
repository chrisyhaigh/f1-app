import React from "react"
import { Link } from 'react-router-dom'
import '../css/App.css'
import Drivers from './Drivers'


function App() {
    return (
      <div className="container-home">
        <div className="row">
            <div className="box">
              <Link to="/Drivers">
                <div className="image-container">
                  <img className="helmet-image" src="/src/images/img_edmartinez_20160315-230015_imagenes_md_otras_fuentes_no_archivables_alonso-k4PE--911x683@MundoDeportivo-Web.png" width="160" />
                </div>
                <div className="driver-title">
                  <h3 className="text-center text-white">Drivers Standings</h3>
                </div>
              </Link>
            </div>

            <div className="box">
              <a href='#'>
                  <div className="image-container">
                    <img className="car-image" src="/src/images/purepng.com-red-lotus-e23-f1.png" width="200" />
                  </div>
                  <div className="constructor-title">
                    <h3 className="text-center text-white">Constructor Standings</h3>
                  </div>
              </a>
            </div>

            <div className="box">
              <a href='#'>
                <div className="image-container">
                  <img className="flag-image" src="/src/images/checkered-racing-flags-hi.png" width="200" />
                </div>
                <div className="races-title">
                  <h3 className="text-center text-white">Races</h3>
                </div>
              </a>
            </div>
        </div>
      </div>
    )
}

export default App
