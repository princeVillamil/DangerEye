import './assets/style/AboutPage.css'

import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'

import treusuremapIMG from './assets/imgs/treusuremapIMG.png'

const AboutPage = () => {
    return(
        <div className="aboutPageContainer">
            <HeaderComponent/>
            <section className="about-section">
                <div className="container">
                    <h1>About DangerEye</h1>
                    <p><span>DangerEye</span> is a community-driven safety platform that empowers individuals with real-time information about potential risks in their area. By combining official data with user-generated reports, DangerEye provides a comprehensive view of local safety conditions. Our mission is to create safer communities by fostering awareness and promoting responsible reporting.  We believe that access to timely and accurate safety information is a fundamental right.</p>
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

export default AboutPage



