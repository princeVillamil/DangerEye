import './assets/style/TermsPrivacyCookiePages.css'

import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'


const TermsOfUsePage = () => {
    return(
        <div className="termsOfUsePageContainer">
            <HeaderComponent/>
            <section className="termsOfUse-section">
                <div className="container">
                    <h1>Release Notes</h1>
                    <div className="termsOfUse-container">
                        <div className="termsOfUse-card">
                            <p>Welcome to DangerEye! These Terms of Use govern your access to and use of the DangerEye website and mobile application to ensure the safety of each individuals. By accessing or using the Services, you agree to be bound by these Terms of Use. Please read them carefully before using DangerEye.</p>
                            <h2>Key Sections:</h2>
                            <ul>
                                <li><p><span>Acceptance of Terms</span>: Clearly state that using the service implies agreement to the terms.</p></li>
                                <li><p><span>Description of Services</span>: Briefly describe the core functionality of DangerEye (real-time safety information, user reports, etc.).</p></li>
                                <li><p><span>User Responsibilities</span>: Outline what users are allowed and not allowed to do (e.g., no misuse of information, no harassment, accurate reporting).  Specifically address the responsible use of user-generated content and prohibit false reporting.</p></li>
                                <li><p><span>Account Registration and Security</span>: Explain account creation, password security, and user responsibility for account activity.</p></li>
                                <li><p><span>Content Ownership and Usage</span>: Define who owns the content on DangerEye (user-generated content vs. DangerEye's content) and how DangerEye can use user content (e.g., displaying it on the map, aggregating it for safety analysis).</p></li>
                                <li><p><span>Disclaimer of Warranties</span>: State that the service is provided "as is" and without warranties of any kind.  Specifically disclaim any warranties about the accuracy, completeness, or reliability of the safety information.</p></li>
                                <li><p><span>Limitation of Liability</span>: Limit DangerEye's liability for any damages arising from the use of the service.</p></li>
                                <li><p><span>Indemnification</span>Indemnification: State that users agree to indemnify DangerEye from any claims arising from their use of the service.</p></li>
                                <li><p><span>Governing Law</span>: Specify which jurisdiction's laws govern the Terms of Use.</p></li>
                                <li><p><span>Changes to Terms</span>: Explain how and when the Terms of Use might be updated.</p></li>
                                <li><p><span>Contact Information</span>: Provide contact information for questions about the Terms of Use.</p></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            
            <FooterComponent/>
        </div>
    )
}

export default TermsOfUsePage



