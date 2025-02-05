// import { useState } from 'react'

import './assets/style/HomePage.css'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'

import globeIMG from './assets/imgs/globeIMG.png'

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
              <a href="#" src="btn">Explore the map</a>
            </div>

          </div>
        </section>
        <FooterComponent/>
    </div>

  )
}

export default HomePage