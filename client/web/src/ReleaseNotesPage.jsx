import './assets/style/ReleaseNotesPage.css'

import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'

import treusuremapIMG from './assets/imgs/treusuremapIMG.png'

const ReleaseNotesPage = () => {
    return(
        <div className="releaseNotesPageContainer">
            <HeaderComponent/>
            <section className="releaseNotes-section">
                <div className="container">
                    <h1>Release Notes</h1>
                    <div className="releaseNotes-container">
                        <div className="releaseNotes-card">
                            <h2>Version 0.1</h2>
                            <h4>Initial Release:</h4>
                            <ul>
                                <li><p><span>User Registration</span>: Create your DangerEye account by providing your login name, first name, last name, password, mobile number, and valid email address.</p></li>
                                <li><p><span>User Login</span>: Securely log in to your DangerEye account to access personalized features and contribute to the community.</p></li>
                                <li><p><span>Contacts</span>: Store important emergency contact numbers for quick access in critical situations.</p></li>
                                <li><p><span>Map Functionality</span>: View real-time information about nearby dangers and hazards on an interactive map. The map displays relevant information based on your location to avoid information overload.</p></li>
                            </ul>
                        </div>
                        <div className="releaseNotes-card">
                            <h2>Version 0.2</h2>
                            <h4>New Features:</h4>
                            <ul>
                                <li><p><span>Friend Request System</span>: Connect with other DangerEye users! Send friend requests to people you know and stay updated on their activity within the app.</p></li>
                                <li><p><span>Enhanced Notifications</span>:  Receive timely push notifications about nearby dangers, friend requests, map updates, and newly added hazards (optional).</p></li>
                                <li><p><span>Note Functionality</span>: Share important safety information directly on the map! Logged-in users can post notes about hazards and dangers in specific locations.  Notes are visible to all users, even those not logged in.</p></li>
                            </ul>
                        </div>
                        <div className="releaseNotes-card">
                            <h2>Version 0.3</h2>
                            <h4>New Features:</h4>
                            <ul>
                                <li><p><span>Accessibility Enhancements</span>:  DangerEye now includes accessibility features to cater to a wider range of users.  Customize font size, zoom level, use voice control, and enable visual aids for a more personalized and accessible experience.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            
            <FooterComponent/>
        </div>
    )
}

export default ReleaseNotesPage



