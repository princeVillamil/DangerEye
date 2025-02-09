import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import HomePage from './HomePage.jsx'
import AboutPage from './AboutPage.jsx'
import ManifestoPage from './ManifestoPage.jsx'
import ReleaseNotesPage from './ReleaseNotesPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AboutPage /> */}
    {/* <HomePage/> */}
    {/* <ManifestoPage/> */}
    <ReleaseNotesPage/>
  </StrictMode>,
)
