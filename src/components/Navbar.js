import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../assests/logo.png';
import '../styles/Navbar.css'


function Navbar() {
    //Fist state
    const [click, setClick] = useState(false);;
    const [navbar, setNavbar] = useState(false);

    //state after
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(true);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <div className={navbar ? 'navbar act' : 'navbar'}>
                <div className="image">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div onClick={handleClick}>
                    <ul className={click ? 'navLinks active' : 'navLinks'}>
                        <li><Link className="links hoverLink" onClick={closeMenu} to="/">Home</Link></li>
                        <li><Link className="links hoverLink" onClick={closeMenu} to="/">About</Link></li>
                        <li><Link className="links hoverLink" onClick={closeMenu} to="/">Services</Link></li>
                        <li><Link className="links hoverLink" onClick={closeMenu} to="/">Portfolio</Link></li>
                        <li><Link className="links hoverLink" onClick={closeMenu} to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar