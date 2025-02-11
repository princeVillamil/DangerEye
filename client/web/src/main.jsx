import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import HomePage from './HomePage.jsx'
import AboutPage from './AboutPage.jsx'
import ManifestoPage from './ManifestoPage.jsx'
import ReleaseNotesPage from './ReleaseNotesPage.jsx'
import TermsOfUse from './TermsOfUsePage.jsx'
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx'
import CookiePolicyPage from './CookiePolicyPage.jsx'
import EmergencyHotlinePage from './EmergencyHotlinePage.jsx'
import LoginPage from './LoginPage.jsx'
import RegisterPage from './RegisterPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HomePage/> */}
    {/* <AboutPage /> */}
    {/* <ManifestoPage/> */}
    {/* <ReleaseNotesPage/> */}
    {/* <TermsOfUse/> */}
    {/* <PrivacyPolicyPage/> */}
    {/* <CookiePolicyPage/> */}
    {/* <EmergencyHotlinePage/> */}
    {/* <LoginPage/> */}
    <RegisterPage/>
  </StrictMode>,
)
