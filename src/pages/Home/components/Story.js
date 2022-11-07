import storyImg from '../../../images/index/coverphoto.png'
import '../Home.css'

function Story(){
    return(
        <section className="storySec" aria-label="Story Section">
            <div className='story-content par'>
                <h2 className='story-header'>About Us</h2>
                
                Founded in 1998, Insane Ink is an entrepreneurial course at Piedmont Hills High School where
                students are responsible for running an apparel customization company.

                <br/>
                <br/>

                <a href="https://insaneinkv2.netlify.app/about">Learn More</a>
            </div>
            <img className='story-content img' src={storyImg} alt='Placeholder'/>
        </section>
    )
}

export default Story;