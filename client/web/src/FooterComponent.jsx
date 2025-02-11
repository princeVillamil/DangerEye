import './assets/style/FooterComponent.css'
import { Link, useNavigate } from 'react-router-dom';
import facebookLogo from './assets/imgs/facebook-logo-50.png';
import githubLogo from './assets/imgs/github-logo-50.png';
import xLogo from './assets/imgs/x-logo-50.png';

const FooterComponent = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    
    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const SITEMAP = [
      { 
        title: "APP", 
        links: [
          { name: "Android & IOS", path: "/apps/mobile" },
          { name: "Desktop", path: "/apps/desktop" },
          { name: "Web Explorer", path: "/map-page" }
        ]
      },
      { 
        title: "Resources", 
        links: [
          { name: "Forum Center", path: "/forum" },
          { name: "Help Center", path: "/help" }
        ]
      },
      { 
        title: "About", 
        links: [
          { name: "About DangerEye", path: "/about" },
          { name: "Manifesto", path: "/manifesto" },
          { name: "Release Notes", path: "/release-note" }
        ]
      },
      { 
        title: "Legal", 
        links: [
          { name: "Terms of Use", path: "/terms-of-use" },
          { name: "Privacy Policy", path: "/privacy-policy" },
          { name: "Cookie Policy", path: "/cookie-policy" }
        ]
      },
    ];

    return(
        <footer className="footerContainer">
            <div className="container">
                <div className="grid">
                {SITEMAP.map(({ title, links }, key) => (
                    <div key={key} className="section">
                        <h4 className="section-title">{title}</h4>
                        <ul className="link-list">
                            {links.map((link, index) => (
                            <li key={index}>
                                <button 
                                    onClick={() => handleNavigation(link.path)}
                                    className="footer-link"
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                >
                                    {link.name}
                                </button>
                            </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
                <div className="bottom">
                <p className="copyright">
                    &copy; {currentYear} <button 
                        onClick={() => handleNavigation('/')}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >DangerEye</button>. All Rights Reserved.
                </p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <img src={facebookLogo} alt="Facebook Logo" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <img src={githubLogo} alt="Github Logo" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <img src={xLogo} alt="X Logo" />
                    </a>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent