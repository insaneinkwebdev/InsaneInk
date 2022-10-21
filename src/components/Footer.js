import './css/Footer.css'
import logo from './img/footerLogo.svg'
import facebook from './img/facebook.svg'
import instagram from './img/instagram.svg'
import twitter from './img/twitter.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons"

function Footer(){
    return(
        <>
            <footer className='footer'>
                  <div className='footer-container'>
                    <div className='footer-row'>
                        <div className='footer-col' id="company">
                            <img src={logo} alt="Insane Ink Logo" className='footer-logo'/>
                            <p>MAKING SHIRT HAPPEN SINCE 1998.</p>

                            <div className='socials'>
                                <a href="https://google.com" className="social-icon"><img className="social-icon img" src={instagram} alt="icon instagram"/></a>
                                <a href="https://google.com" className="social-icon"><img className="social-icon img" src={twitter} alt="icon twitter"/></a>
                                <a href="https://google.com" className="social-icon"><img className="social-icon img" src={facebook} alt="icon facebook"/></a>
                            </div>
                        </div>

                        <div className='footer-col' id="services">
                            <h3>Services</h3>
                            <div className='footer-links'>
                                <a href="https://google.com">Direct To Garment</a>
                                <a href="https://google.com">Print Shop</a>
                                <a href="https://google.com">Heat Press</a>
                            </div>
                        </div>
                        <div className='footer-col' id="useful-links">
                            <h3>Links</h3>
                            <div className='footer-links'>
                                <a href="https://google.com">About Us</a>
                                <a href="https://google.com">Treasure Trove</a>
                                <a href="https://google.com">The Process</a>
                                <a href="https://google.com">Merch & More!</a>
                                <a href="https://google.com">Portfolio</a>
                                <a href="https://google.com">The 50/50 Concept</a>
                            </div>
                        </div>
                        <div className='footer-col' id="contact">
                            <h3>Contact</h3>
                            <div className='contact-details'>
                                <span className='contact-icon'><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                                <p>1377 Piedmont Road, San Jose,<br/>CA 95132</p>
                            </div>

                            <div className='contact-details'>
                                <span className='contact-icon'><FontAwesomeIcon icon={faPhone}/></span>
                                <p>(408)-347-7579</p>
                            </div>
                        </div>
                    </div>
                  </div>
            </footer>
        </>
    )
}

export default Footer;