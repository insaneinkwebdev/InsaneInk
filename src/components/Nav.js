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
                link.style.animation = `navLinkFade 500ms ease-in-out forwards ${index / 6}s`;
            }
        })

        burger.classList.toggle('toggle')
    }

    return(
        <>
            <nav className="navBar">
                <div class="logo">
                    <a href="#"><img src={logo} alt='Insane Ink Logo'></img></a>
                </div>
                <ul className='nav-links'>
                    <li><a href="https://google.com">About Us</a></li>
                    <li><a href="https://google.com">Treasure Trove</a></li>
                    <li><a href="https://google.com">The Process</a></li>
                    <li><a href="https://google.com">Merch & More!</a></li>
                    <li><a href="https://google.com">Portfolio</a></li>
                    <li><a href="https://google.com">The 50/50 Concept</a></li>
                    <li><a href="https://google.com">Contact Us</a></li>
                </ul>
                <div className='burger' onClick={burger}>
                    <div class='line1'></div>
                    <div class='line2'></div>
                    <div class='line3'></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;