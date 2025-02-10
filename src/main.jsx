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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AboutPage /> */}
    {/* <HomePage/> */}
    {/* <ManifestoPage/> */}
    {/* <ReleaseNotesPage/> */}
    {/* <TermsOfUse/> */}
    {/* <PrivacyPolicyPage/> */}
    <CookiePolicyPage/>
  </StrictMode>,
)
