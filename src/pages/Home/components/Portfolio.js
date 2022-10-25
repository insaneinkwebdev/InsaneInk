import portfolio from '../../../images/index/portfolioimg.png'
import '../Home.css'

function Portfolio (){
    return(
        <section className="portSec" aria-label="Portfolio Section">
            <img className='port-content img' src={portfolio} alt='Placeholder'/>
            <div className='port-content par'>
                <h2 className='port-header'>Portfolio</h2>
                
                We have customized over 100 different apparels with a wide variety of items to choose from <a href="https://google.com">our Catalog</a>.
                
                <br/>
                <br/>
                
                Whether it be big or small, simple or complex, we got you covered!
                
                <br/>
                <br/>

                <a href="https://google.com">Learn More</a>
            </div>
        </section>
    )
}

export default Portfolio;