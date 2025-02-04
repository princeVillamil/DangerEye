import './assets/style/FooterComponent.css'
import facebookLogo from './assets/imgs/facebook-logo-50.png';
import githubLogo from './assets/imgs/github-logo-50.png';
import xLogo from './assets/imgs/x-logo-50.png';


const FooterComponent = () => {
    const currentYear = new Date().getFullYear();
    const SITEMAP = [
      { title: "APP", links: ["Android & IOS", "Desktop", "Web Explorer"] },
      { title: "Resources", links: ["Forum Center", "Help Center"] },
      { title: "About", links: ["About DangerEye", "Manifesto", "Release Notes"] },
      { title: "Legal", links: ["Terms of Use", "Privacy Policy", "Cookie Policy"] },
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
                                <a href="#" className="footer-link">{link}</a>
                            </li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
                <div className="bottom">
                <p className="copyright">
                    &copy; {currentYear} <a href="https://example.com">DangerEye</a>. All Rights Reserved.
                </p>
                <div className="social-icons">
                    <a href="#" className="icon"><img src={facebookLogo} alt="Facebook Logo" /></a>
                    <a href="#" className="icon"><img src={githubLogo} alt="Github Logo" /></a>
                    <a href="#" className="icon"><img src={xLogo} alt="X Logo" /></a>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent