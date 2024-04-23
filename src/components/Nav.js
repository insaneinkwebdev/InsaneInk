import './css/Navbar.css'
import logo from './img/logo.svg'

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
                            <li><a href="/dtg">Small Quantity (DTG)</a></li>
                            <li><a href="/roland#print-shop">Specialty Printing</a></li>
                        </ul>
                    </li>

                    <li id="nav-mobile-on"><a href="/dtg">Small Quantity (DTG)</a></li>
                    <li id="nav-mobile-on"><a href="/roland#print-shop">Specialty Printing</a></li>

                    <li><a href="/our-portfolio">Portfolio</a></li>

                    <li>
                        <a href="/fiftyfifty"  className='drop-hover fifty'>The 50/50 Concept</a>
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
                            <li><a href="/treasuretrove#currentspecials">Current Specials</a></li>
                            <li><a href="/treasuretrove#currentcollection">Spring Collection</a></li>
                        </ul>
                    </li>

                    <li id="nav-mobile-on"><a href="/treasuretrove#currentspecials">Current Specials</a></li>
                    <li id="nav-mobile-on"><a href="/treasuretrove#currentcollection">Spring Collection</a></li>

                </ul>
                <div className='burger' onClick={burger}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>

            </nav>
             {/*YEAR ROUND BANNER*/}
            <div className='closedBanner'>
                <p className='closedContent'>
                    Treasure Trove is closing soon! Last day to buy is Thursday, April 25th during lunch. Visit our <a href="/treasuretrove#currentspecials">Treasure Trove page </a> to see our reduced prices!
                </p>
            </div>
        </>
    )
}



export default Navbar;