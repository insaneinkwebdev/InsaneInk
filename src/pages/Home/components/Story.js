import storyImg from '../../../images/index/coverphoto.png'
import '../Home.css'
import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

function Story(){
    return( 
        <section className="storySec" aria-label="Story Section">
            <div className='story-content par'>
                <AnimationOnScroll animateIn='animate__fadeInUp' animateOut='animate__fadeOutDown' animatePreScroll="false">
                    <h2 className='story-header'>About Us</h2>
                </AnimationOnScroll>
                
                Founded in 1998, Insane Ink is an entrepreneurial course at Piedmont Hills High School where
                students are responsible for running an apparel customization company.

                <br/>
                <br/>

                <a href="/about">Learn More</a>
            </div>
            
            <img className='story-content img' src={storyImg} alt='Placeholder'/>
        </section>
    )
}

export default Story;