import { useState } from 'react';
import './assets/style/HeaderComponent.css';
import dangereyeLogo from './assets/imgs/dangereye-logo-1.png';
import UserDropdownComponent from './UserDropdownComponent';

<<<<<<< HEAD

const HeaderComponent = ({ currentUser = null }) => {

    
    return(
=======
const HeaderComponent = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
>>>>>>> main
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#" className="logo-link" aria-label="Back to homepage">
                        <img src={dangereyeLogo} alt="dangereyeLogo Logo" />
                    </a>

                    <div className="menu">
                        <ul className="menu-links">
                            <li 
                                className="menu-item"
                                onClick={() => toggleDropdown('home')}
                            >
                                <a href="/home" className="menu-link">Home</a>
                            </li>

                            <li 
                                className="menu-item"
                                onClick={() => toggleDropdown('apps')}
                            >
                                <a href="#" className="menu-link">Apps</a>
                                {openDropdown === 'apps' && (
                                    <ul className="dropdown">
                                        <li><a href="#">Android & IOS</a></li>
                                        <li><a href="#">Dekstop</a></li>
                                        <li><a href="#">Web Explorer</a></li>
                                    </ul>
                                )}
                            </li>

                            <li 
                                className="menu-item"
                                onClick={() => toggleDropdown('resources')}
                            >
                                <a href="#" className="menu-link">Resources</a>
                                {openDropdown === 'resources' && (
                                    <ul className="dropdown">
                                        <li><a href="/forum">Forum Center</a></li>
                                        <li><a href="/help-center">Help Center</a></li>
                                    </ul>
                                )}
                            </li>

                            <li
                            className="menu-item"
                            onClick={() => toggleDropdown('about')}
                            >
                                
                                <a href="#" className="menu-link">About</a>
                            {openDropdown === 'about' && (
                                <ul className='dropdown'>
                                     <li><a href="/about">About DangerEye</a></li>
                                     <li><a href="/manifesto">Manifesto</a></li>
                                     <li><a href="/release-note">Release Notes</a></li>
                                </ul>
                            )}
                            </li>
                        </ul>
                    </div>
                </div>

<<<<<<< HEAD
                {
                    (currentUser!=null)
                    ?
                    <UserDropdownComponent currentUser={currentUser}/>
                    :
                    <div className="auth">
                        <a href="#" className="menuRight-link menuRight-linkLine">Contact Us</a>
                        <a href="/login" className="menuRight-link">Log In</a>
                        <a href="/register" className="login-button">Sign up</a>
                    </div>
                }
=======
                <div className="auth">
                    <a href="#" className="menuRight-link menuRight-linkLine">Contact Us</a>
                    <a href="/login" className="menuRight-link">Log In</a>
                    <a href="/register" className="login-button">Sign up</a>
                </div>
>>>>>>> main
            </div>
        </header>
    )
}

export default HeaderComponent;
