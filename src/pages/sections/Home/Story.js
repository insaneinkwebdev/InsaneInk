import storyImg from '../../../images/index/coverphoto.png'
import '../../Pages.css'

function Story(){
    return(
        <section className="storySec" aria-label="Story Section">
            <div className='story-content par'>
                <h2 className='story-header'>About Us</h2>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies tortor nunc, 
                sed scelerisque nisi feugiat vel.

                <br/>
                <br/>

                <a href="https://google.com">Learn More</a>
            </div>
            <img className='story-content img' src={storyImg} alt='Placeholder'/>
        </section>
    )
}

export default Story;