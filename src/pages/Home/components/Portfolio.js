import portfolio from '../../../images/index/portfolioimg.png'
import '../Home.css'
import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

function Portfolio (){
    return(
        <section className="portSec" aria-label="Portfolio Section">
            <img className='port-content img' src={portfolio} alt='Placeholder'/>
            <div className='port-content par'>
                <AnimationOnScroll animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                    <h2 className='port-header'>Portfolio</h2>
                </AnimationOnScroll>
                
                We have customized over 100 different apparels with a wide variety of items to choose from <a href="www.4logoapparel.com/insaneink">our Catalog</a>.
                
                <br/>
                <br/>
                
                Whether it be big or small, simple or complex, we got you covered!

                <br/>
                <br/>

                <a href="/our-portfolio">Check It Out!</a>
            </div>
        </section>
    )
}

export default Portfolio;