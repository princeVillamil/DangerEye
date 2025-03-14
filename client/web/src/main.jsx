import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import ManifestoPage from './ManifestoPage.jsx';
import ReleaseNotesPage from './ReleaseNotesPage.jsx';
import TermsOfUsePage from './TermsOfUsePage.jsx';
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx';
import CookiePolicyPage from './CookiePolicyPage.jsx';
import EmergencyHotlinePage from './EmergencyHotlinePage.jsx';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import MapPage from './MapPage.jsx';
import MapNote from './MapNote.jsx';
import Forum from './Forum.jsx';
import HelpCenter from './HelpCenter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/release-note" element={<ReleaseNotesPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/emergency-hotline" element={<EmergencyHotlinePage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/map-note" element={<MapNote />}/>
        <Route path="/forum" element={<Forum />}/>
        <Route path="/help-center" element={<HelpCenter />}/>
      </Routes>
    </Router>
  </StrictMode>
);