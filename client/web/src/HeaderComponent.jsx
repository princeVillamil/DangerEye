import './assets/style/HeaderComponent.css'
import dangereyeLogo from './assets/imgs/dangereye-logo-1.png';


const HeaderComponent = () => {
    
    return(
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#" className="logo-link" aria-label="Back to homepage">
                        <img src={dangereyeLogo} alt="dangereyeLogo Logo" />
                    </a>

                    <div className="menu">
                        <ul className="menu-links">
                        <li><a href="#" className="menu-link active">home</a></li>
                        <li><a href="#" className="menu-link">apps</a></li>
                        <li><a href="#" className="menu-link">resources</a></li>
                        <li><a href="#" className="menu-link">about</a></li>
                        </ul>
                    </div>
                </div>
                <div className="auth">
                    <a href="#" className="menuRight-link menuRight-linkLine">Contact Us</a>
                    <a href="/login" className="menuRight-link">Log In</a>
                    <a href="/register" className="login-button">Sign up</a>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent