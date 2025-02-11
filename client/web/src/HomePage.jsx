// import { useState } from 'react'
import './assets/style/HomePage.css'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'

import globeIMG from './assets/imgs/globeIMG.png'
import ambulanceIMG from './assets/imgs/ambulanceIMG.png'
import roedIMG from './assets/imgs/roedIMG.png'
import notesIMG from './assets/imgs/notesIMG.png'
import treusuremapIMG from './assets/imgs/treusuremapIMG.png'
import MapPage from './MapPage.jsx';

const HomePage = () =>{
  return (
    <div className="homePageContainer">
        <HeaderComponent/>
        <section className="hero-section">
          <div className="container">
            <div className="image-container">
              <img src={globeIMG} alt="" />
            </div>
            <div className="content">
              <h3>
                welcome to
              </h3>
              <h1>
                DangerEye
              </h1>
              <p>Your no. 1 safety app for your daily travel.</p>
              <a href="/map-page" src="btn">Explore the map</a>
            </div>
          </div>
        </section>
        
        {/* <section className="emergency-section">
          <div className="container">
            <div className="text-content">
                <h1>Emergency <span>Hotline</span></h1>
                <p>Readily available at your current area</p>
                <button className="cta-button">View more</button>
            </div>
            <div className="image-container">
                <img src={roedIMG} className='roed-bg' alt="Roed Background"/>
                <img src={ambulanceIMG} className='ambulance' alt="Ambulance"/>
            </div>
          </div>
        </section> */}
        <section className="notes-section">
          <div className="container">
            <div className="notes-left">
              <img src={notesIMG} alt="Notes IMG" />
            </div>
            <div className="notes-right">
              <h1>
                Add notes to the map
              </h1>
              <p>unique functionality to inform other people about the dangerous & hazardous area</p>
              <a href="#" src="btn">Try it now!</a>
            </div>
          </div>
        </section>
        <section className="map-section">
          <div className="container">
            <div className="mapOverlay">
              <img src={treusuremapIMG} alt="Treusure Map IMG" />
            </div>
            <div className="map-content">
              <h1>
                Start using DangerEye Map
              </h1>
              <p>Your no. 1 safety app for your daily travel</p>
              <a href="#" src="btn">Explore the map</a>
            </div>
          </div>
        </section>
        
        <FooterComponent/>
    </div>

  )
}

export default HomePage