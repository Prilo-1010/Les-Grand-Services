import React from 'react'
import Logo from '../assests/logo.png';
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { Button } from './Button';


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer1'>
                    <img src={Logo} alt=
                    'logo'/>
                 
                    
                </div>
                <div className='footer-diagonal'> </div>
                
                <div className='footer2'>
                <div className='ftext'>
                        <h3>Let us make your service great</h3>
                    </div>
                    <Button
                    buttonStyle='btn-primary'
                    buttonSize='btn-large'
                    type='submit'
                    onClick={console.log("Prosper")}
                    >
                        Get In Touch
                    </Button>
                    <p>©2022 Le Grand Service Inc. </p>
                    <ul>
                        <Link className='flinks' to="/portfolio">
                            <li><i class="fa-brands fa-instagram"></i></li>
                        </Link>
                        <Link className='flinks' to="/portfolio">
                            <li><i class="fa-brands fa-twitter"></i></li>
                        </Link>
                        <Link className='flinks' to="/portfolio">
                            <li><i class="fa-brands fa-linkedin"></i></li>
                        </Link>
                        <Link className='flinks' to="/portfolio">
                            <li><i class="fa-brands fa-github"></i></li>
                        </Link>
                    </ul>
                </div>
                <div className='footer3'>
                    <h2>Quick Links</h2>
                    <ul className="footerLinks">
                        <li><Link className="flinks hoverLink" to="/">Home</Link></li>
                        <li><Link className="flinks hoverLink" to="/about">About</Link></li>
                        <li><Link className="flinks hoverLink" to="/portfolio">Portfolio</Link></li>
                        <li><Link className="flinks hoverLink" to="/services">Services</Link></li>
                        <li><Link className="flinks hoverLink" to="/pricing">Pricing</Link></li>
                        <li><Link className="flinks hoverLink" to="/contact">Contact</Link></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer