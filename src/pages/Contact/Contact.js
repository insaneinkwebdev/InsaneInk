import "./Contact.css"
import dataCont from './dataCont'


function Contact(){
    return(
        <div className="container">
            <h2 className="cont-header">Meet The Board</h2>
            <div className="container board">
                <div className='board-grid'>
                    {dataCont.map((obj, index) => {
                            return(
                                <div className="card stacked" key={obj.id}>
                                    <img src={process.env.PUBLIC_URL + `/board/${index + 1}.png`} alt=" " className="cont-card__img"/>
                                    <div className="cont-card__content">
                                        <h3 className="card__name">{obj.name}</h3>
                                        <p className="card__pos">{obj.position}</p>
                                        <p className="card__email">{obj.email}</p>
                                        <p className="card__phone">{obj.phone}</p>
                                    </div> 
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    );
}

export default Contact;