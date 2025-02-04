// import { useState } from 'react'

import './assets/style/HomePage.css'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'

const HomePage = () =>{
  return (
    <div className="homePageContainer">
        <HeaderComponent/>
        <h2 style={{ height: '30vh' }}></h2>
        <FooterComponent/>
    </div>

  )
}

export default HomePage