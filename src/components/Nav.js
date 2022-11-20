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
                    <a href="https://insaneinkv2.netlify.app"><img src={logo} alt='Insane Ink Logo'></img></a>
                </div>
                <ul className='nav-links'>
                    <li><a href="https://insaneinkv2.netlify.app/about">About Us</a></li>
                    <li><a href="https://www.insaneink.com/contactus.php">Meet The Team</a></li>
                    <li>
                        <a href="https://www.insaneink.com/theprocess.php" className='drop-hover merch'>Order Now !</a>
                        <ul className='drop merch'>
                            <li><a href="https://www.insaneink.com/dtg.php">Small Quantity (DTG)</a></li>
                            <li><a href="https://www.insaneink.com/roland.php">Print Shop</a></li>
                            <li><a href="https://www.insaneink.com/roland.php">Heat Press</a></li>
                        </ul>
                    </li>

                    <li><a href="https://www.insaneink.com/theprocess.php">Portfolio</a></li>

                    <li>
                        <a href="https://www.insaneink.com/the5050concept.php"  className='drop-hover fifty'>The 50/50 Concept</a>
                        <ul className='drop fifty'>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2022-2023 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2020-2022 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2019-2020 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2018-2019 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2017-2018 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2016-2017 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2015-2016 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2014-2015 Events</a></li>
                            <li><a href="https://www.insaneink.com/the5050concept.php">2013-2014 Events</a></li>
                        </ul>
                    </li>
                    <li><a href="https://insaneinkv2.netlify.app/treasuretrove">Treasure Trove</a></li>
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