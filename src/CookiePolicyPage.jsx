import './assets/style/TermsPrivacyCookiePages.css'

import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'


const CookiePolicyPage = () => {
    return(
        <div className="termsOfUsePageContainer">
            <HeaderComponent/>
            <section className="termsOfUse-section">
                <div className="container">
                    <h1>Cookie Policy</h1>
                    <div className="termsOfUse-container">
                        <div className="termsOfUse-card cookiePolicy-card">
                            <p>This Cookie Policy explains how DangerEye Corp. uses cookies and similar technologies on DangerEye.</p>
                            <h2>Key Sections:</h2>
                            <ul>
                                <li><p><span>Types of Cookies We Use</span>: Describe the types of cookies used (e.g., essential cookies, performance cookies, functionality cookies, advertising cookies).  Be specific about which cookies are used and what they do.</p></li>
                                <li><p><span>How We Use Cookies</span>: Explain how the cookies are used (e.g., remembering preferences, analyzing site traffic, personalizing content).</p></li>
                                <li><p><span>Third-Party Cookies</span>:  Disclose if any third-party cookies are used (e.g., analytics providers, advertising networks) and what those parties do with the data.</p></li>
                                <li><p><span>Managing Cookies</span>: Explain how users can control cookies (e.g., browser settings, opt-out mechanisms).</p></li>
                                <li><p><span>Changes to Cookie Policy</span>: Explain how and when the Cookie Policy might be updated.</p></li>
                                <li><p><span>Contact Information</span>: Provide contact information for cookie-related inquiries.</p></li>
                            </ul>
                        </div>
                        <div className="termsOfUse-card cookiePolicy-card">
                            <h2>Important Considerations for All Documents:</h2>
                            <ul>
                                <li><p><span>Legal Counsel</span>: It is highly recommended to consult with legal counsel to ensure these documents are compliant with all applicable laws and regulations (e.g., GDPR, CCPA).</p></li>
                                <li><p><span>Accessibility</span>: Make sure the documents are easily accessible and readable.</p></li>
                                <li><p><span>Regular Review</span>: Review and update these documents periodically to reflect changes in the service or legal requirements.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            
            <FooterComponent/>
        </div>
    )
}

export default CookiePolicyPage



