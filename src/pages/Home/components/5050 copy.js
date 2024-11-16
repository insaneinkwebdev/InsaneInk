import fiftyImg from '../../../images/index/classimg.png'
import '../Home.css'
import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

function Fifty(){
    return(
        <section className="fiftySec" aria-label="50/50 Section">
        <div className='fifty-content par'>
            <AnimationOnScroll animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown'>
                <h2 className='fifty-head'>The 50/50 Concept</h2>
            </AnimationOnScroll>
            
            We proudly dedicate our time, resources, and half of our proceeds to local events in order to strengthen, uplift, and give back to the community.
        
            <br/>
            <br/>

            Insane Ink sincerely thanks you for your support on behalf of those we have, continue to, and hope to serve.

            <br/>
            <br/>

            <a href="/fiftyfifty">Learn More</a>
        </div>
        <img className='fifty-content img' src={fiftyImg} alt='Placeholder'/>
    </section>
    )
}

export default Fifty;