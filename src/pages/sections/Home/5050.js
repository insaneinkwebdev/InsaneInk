import fiftyImg from '../../../images/index/5050img.jpeg'
import '../../Pages.css'

function Fifty(){
    return(
        <section className="portSec" aria-label="50/50 Section">
            <div className='fifty-content par'>
                <h2 className='port-header'>The 50/50 Concept</h2>
                
                We proudly donate half of our proceeds, time, and resources in order to strengthen, uplift, and give back to the community.
            
                <br/>
                <br/>

                Insane Ink sincerely thanks you for your support on behalf of those we have, continue to, and hope to serve.

                <br/>
                <br/>

                <a href="https://google.com">Learn More</a>
            </div>
            <img className='port-content img' src={fiftyImg} alt='Placeholder'/>
        </section>
    )
}

export default Fifty;