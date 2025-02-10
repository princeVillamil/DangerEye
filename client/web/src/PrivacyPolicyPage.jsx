import './assets/style/TermsPrivacyCookiePages.css'

import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'


const PrivacyPolicyPage = () => {
    return(
        <div className="termsOfUsePageContainer">
            <HeaderComponent/>
            <section className="termsOfUse-section">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <div className="termsOfUse-container">
                        <div className="termsOfUse-card">
                            <p>Your privacy is important to us.  This Privacy Policy explains how DangerEye Corp. collects, uses, and shares your personal information when you use DangerEye.</p>
                            <h2>Key Sections:</h2>
                            <ul>
                                <li><p><span>Information We Collect</span>: Detail what information is collected (e.g., account information, location data, user-generated reports, device information).  Be very specific.</p></li>
                                <li><p><span>How We Use Your Information</span>: Explain how the collected information is used (e.g., providing safety information, personalizing the experience, improving the service, sending notifications).  Be transparent about location data usage.</p></li>
                                <li><p><span>Information Sharing</span>: Describe when and with whom information is shared (e.g., other users [for user-generated content], law enforcement [if required by law], service providers).  Be clear about whether user-generated content is publicly visible.</p></li>
                                <li><p><span>Data Security</span>: Explain the security measures taken to protect user data.</p></li>
                                <li><p><span>Data Retention</span>: State how long user data is kept.</p></li>
                                <li><p><span>Children's Privacy</span>: Address whether children are allowed to use the service and what information is collected from them (if any).  If children are not permitted, state that clearly.</p></li>
                                <li><p><span>Your Choices</span>: Explain user choices regarding their data (e.g., access, correction, deletion, opting out of notifications).</p></li>
                                <li><p><span>Changes to Privacy Policy</span>: Explain how and when the Privacy Policy might be updated.</p></li>
                                <li><p><span>Contact Information</span>: Provide contact information for privacy-related inquiries.</p></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            
            <FooterComponent/>
        </div>
    )
}

export default PrivacyPolicyPage



