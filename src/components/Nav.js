import './css/Navbar.css'
import logo from './img/logo.svg'
import instagram from './img/instagram.svg'
import tiktok from './img/tiktok.svg'

function Navbar(){
    function burger(){
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 500ms ease-in-out forwards 100ms`;
            }
        })

        burger.classList.toggle('toggle')
    }

    return(
        <>
            <nav className="navBar" id="PICKLE">
                <div className="logo">
                    <a href="/"><img src={logo} alt='Insane Ink Logo'></img></a>
                </div>
                <ul className='nav-links'>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contactus">Meet The Team</a></li>
                    <li>
                        <a href="/howitworks" className='drop-hover merch'>How To Order</a>
                        <ul className='drop merch'>
                            <li><a href="/dtg">Custom Garments</a></li>
                            <li><a href="/roland#print-shop">Custom Posters and Stickers</a></li>
                        </ul>
                    </li>

                    <li id="nav-mobile-on"><a href="/dtg">Small Quantity (In-House DTG)</a></li>
                    <li id="nav-mobile-on"><a href="/roland#print-shop">Specialty Printing</a></li>

                    <li><a href="/our-portfolio">Past Projects</a></li>

                    <li>
                        <a href="/fiftyfifty"  className='drop-hover fifty'>Philanthropy</a>
                        {/*<ul className='drop fifty'>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2022-2023 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php#Events2020">2020-2022 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php#Events2019">2019-2020 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php#Events2018">2018-2019 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php#Events2017">2017-2018 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php#Events2016">2016-2017 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php#Events2015">2015-2016 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php#Events2014">2014-2015 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php#Events2013">2013-2014 Events</a></li>
                        </ul>*/}
                    </li>

                    <li>
                        <a href="/treasuretrove" className='drop-hover merch'>Treasure Trove</a>
                        <ul className='drop merch'>
                            {/*<li><a href="/treasuretrove#currentspecials">Current Specials</a></li>*/}
                            <li><a href="/treasuretrove#currentcollection">Treasure Trove Collection</a></li>
                        </ul>
                    </li>

                    {/*<li id="nav-mobile-on"><a href="/treasuretrove#currentspecials">Current Specials</a></li>*/}
                    <li id="nav-mobile-on"><a href="/treasuretrove#currentcollection">Treasure Trove Collection</a></li>

                    
                </ul>

                <ul className='nav-links-social'>
                    <li><a href="https://www.instagram.com/phhs.insaneink/" target="_blank" rel="noreferrer" className="social-icon"><img className="social-icon img" src={instagram} alt="icon instagram"/></a></li>
                    <li><a href="https://www.tiktok.com/@phhs.insaneink" target="_blank" rel="noreferrer" className="social-icon"><img className="social-icon img tiktok" src={tiktok} alt="icon tiktok"/></a></li>
                </ul>
                
                <div className='burger' onClick={burger}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>

            </nav>
        {/*The following block of code displays a banner across all pages, 
        uncomment it at the end of the school year and recomment it at the beginning. 
        This is to let people know we are closed*/}

        
        {/*
            <div className='closedBanner'>
                <p className='closedContent'>
                    Due to being a student enterprise, Insane Ink will be closed through August 2024.  We hope to serve your needs at that time.  Thank you for your support.
                </p>
            </div>
        
        */}
            
        </>
    )
}



export default Navbar;