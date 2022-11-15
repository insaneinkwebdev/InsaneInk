import fiftyImg from '../../../images/index/5050img.png'
import '../Home.css'

function Fifty(){
    return(
        <section className="fiftySec" aria-label="50/50 Section">
            <div className='fifty-content par'>
                <h2 className='fifty-header'>The 50/50 Concept</h2>
                
                We proudly dedicate our time, resources, and half of our proceeds to local events in order to strengthen, uplift, and give back to the community.
            
                <br/>
                <br/>

                Insane Ink sincerely thanks you for your support on behalf of those we have, continue to, and hope to serve.

                <br/>
                <br/>

                <a href="https://www.insaneink.com/the5050concept.php">Learn More</a>
            </div>
            <img className='fifty-content img' src={fiftyImg} alt='Placeholder'/>
        </section>
    )
}

export default Fifty;