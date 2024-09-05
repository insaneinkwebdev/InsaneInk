import './css/Footer.css'
import logo from './img/footerLogo.svg'
import facebook from './img/facebook.svg'
import instagram from './img/instagram.svg'
import twitter from './img/twitter.svg'
import tiktok from './img/tiktok.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons"

function Footer(){
    return(
        <>
            <footer className='footer'>
                  <div className='footer-container'>
                    <div className='footer-row'>
                        <div className='footer-col' id="company">
                            <img src={logo} alt="Insane Ink Logo" className='footer-logo'/>
                            <p className='footer-slogan'>MAKING SHIRT HAPPEN SINCE 1998.</p>

                            <div className='socials'>
                                <a href="https://www.instagram.com/phhs.insaneink/" target="_blank" rel="noreferrer" className="social-icon"><img className="social-icon img" src={instagram} alt="icon instagram"/></a>
                                <a href="https://twitter.com/PHHS_InsaneInk" target="_blank" rel="noreferrer" className="social-icon"><img className="social-icon img" src={twitter} alt="icon twitter"/></a>
                                <a href="https://www.facebook.com/phhsinsaneink" target="_blank" rel="noreferrer" className="social-icon"><img className="social-icon img" src={facebook} alt="icon facebook"/></a>
                                <a href="https://www.tiktok.com/@phhs.insaneink" target="_blank" rel="noreferrer" className="social-icon"><img className="social-icon img tiktok" src={tiktok} alt="icon tiktok"/></a>
                            </div>
                        </div>

                        <div className='footer-col' id="services">
                            <h3>Services</h3>
                            <div className='footer-links'>
                                <a href="/howitworks">How To Order</a>
                                <a href="/dtg">Small Quantity (DTG / DTF)</a>
                                <a href="/roland#print-shop">Specialty Printing</a>
                            </div>
                        </div>
                        <div className='footer-col' id="useful-links">
                            <h3>Links</h3>
                            <div className='footer-links'>
                                <a href="/aboutus">About Us</a>
                                <a href="/contactus">Meet The Team</a>
                                <a href="/our-portfolio">Portfolio</a>
                                <a href="/fiftyfifty">The 50/50 Concept</a>
                                <a href="/treasuretrove">Treasure Trove</a>
                            </div>
                        </div>
                        <div className='footer-col' id="contact">
                            <h3>Contact</h3>
                            
                            <div className='contact-details'>
                                <span className='contact-icon'><FontAwesomeIcon icon={faMailBulk}/></span>
                                <p>sales@insaneink.com</p>
                            </div>

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

                    <div className='footer-row copyr'>
                        &copy; 1998-2024 Insane Ink
                    </div>
                  </div>
            </footer>
        </>
    )
}

export default Footer;