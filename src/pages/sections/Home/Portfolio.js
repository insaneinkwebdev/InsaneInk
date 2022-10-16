import portfolio from '../../../components/img/placeholderImg.jpg'
import '../../Pages.css'

function Portfolio (){
    return(
        <section className="portSec" aria-label="Portfolio Section">
            <img className='port-content img' src={portfolio} alt='Placeholder'/>
            <div className='port-content par'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies tortor nunc, 
                sed scelerisque nisi feugiat vel. Sed sollicitudin neque id quam sollicitudin, eget s
                agittis nisi auctor. Vivamus aliquet leo non sodales imperdiet. Sed hendrerit orci id 
                facilisis aliquam

                <br/>
                <br/>

                <a href="https://google.com">Learn More</a>
            </div>
        </section>
    )
}

export default Portfolio;