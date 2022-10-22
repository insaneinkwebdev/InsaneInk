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
            <nav className="navBar">
                <div className="logo">
                    <a href="https://google.com"><img src={logo} alt='Insane Ink Logo'></img></a>
                </div>
                <ul className='nav-links'>
                    <li><a href="https://google.com">About Us</a></li>
                    <li><a href="https://google.com">Treasure Trove</a></li>
                    <li>
                        <a href="https://google.com" className='drop-hover merch'>Merch & More!</a>
                        <ul className='drop merch'>
                            <li><a href="https://google.com">How To Order</a></li>
                            <li><a href="https://google.com">Small Quantity (DTG)</a></li>
                            <li><a href="https://google.com">Print Shop</a></li>
                            <li><a href="https://google.com">Heat Press</a></li>
                        </ul>
                    </li>

                    <li><a href="https://google.com">Portfolio</a></li>

                    <li>
                        <a href="https://google.com"  className='drop-hover fifty'>The 50/50 Concept</a>
                        <ul className='drop fifty'>
                            <li><a href="https://google.com">2022-2023 Events</a></li>
                            <li><a href="https://google.com">2020-2022 Events</a></li>
                            <li><a href="https://google.com">2019-2020 Events</a></li>
                            <li><a href="https://google.com">2018-2019 Events</a></li>
                            <li><a href="https://google.com">2017-2018 Events</a></li>
                            <li><a href="https://google.com">2016-2017 Events</a></li>
                            <li><a href="https://google.com">2015-2016 Events</a></li>
                            <li><a href="https://google.com">2014-2015 Events</a></li>
                            <li><a href="https://google.com">2013-2014 Events</a></li>
                        </ul>
                    </li>

                    <li><a href="https://google.com">Contact Us</a></li>
                </ul>
                <div className='burger' onClick={burger}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;