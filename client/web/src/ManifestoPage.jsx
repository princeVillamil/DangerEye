import './assets/style/ManifestoPage.css'

import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'

import treusuremapIMG from './assets/imgs/treusuremapIMG.png'
import globeIMG from './assets/imgs/globeIMG.png'


const ManifestoPage = () => {
    return(
        <div className="manifestoPageContainer">
            <HeaderComponent/>
            <section className="manifesto-section">
                <div className="container">
                    <h1>Manifesto</h1>
                    <p>We, the creators of <span>DangerEye</span>, believe that access to real-time information about local safety is a fundamental right. We see a world in which communities collaborate to create safer surroundings for everyone and where people are empowered to make knowledgeable decisions regarding their well-being.</p>
                    <h3>Vision</h3>
                    <p>To provide communities and individuals with up-to-date safety information in order to foster an environment where everyone feels safe, educated, and prepared.</p>
                    <h3>Mission</h3>
                    <p>To offer a thorough and user-friendly platform that, via open data, user cooperation, and easily accessible tools, promotes proactive awareness, lowers crime, and improves community safety.</p>
                    <p>DangerEye is more than an app; it represents a dedication to safety, transparency, and community empowerment. We think that by working together, we can build a world in which everyone feels safe and secure.</p>
                    <p>with love,</p>
                    <div className="pfp-container">
                        <div className="pfp-card">
                            <img src={globeIMG} alt="Team PFP" />
                            <h2>Kirk Sunico</h2>
                        </div>
                        <div className="pfp-card">
                            <img src={globeIMG} alt="Team PFP" />
                            <h2>Jelyka Dizon</h2>
                        </div>
                        <div className="pfp-card">
                            <img src={globeIMG} alt="Team PFP" />
                            <h2>Liandro Refulle</h2>
                        </div>
                        <div className="pfp-card">
                            <img src={globeIMG} alt="Team PFP" />
                            <h2>Jeffrey Villamil</h2>
                        </div>
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

export default ManifestoPage



