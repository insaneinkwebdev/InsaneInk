import portfolio from '../../../components/img/placeholderImg.jpg'

function Other (){
    return(
        <section className="otherSec" aria-label="Other Services Section">
            <div className='other-content par'>
                <img className='port-content img' src={portfolio} alt='Placeholder'/>
            </div>
            
            <div className='other-content par'>
                <img className='port-content img' src={portfolio} alt='Placeholder'/>
            </div>
        </section>
    )
}

export default Other;