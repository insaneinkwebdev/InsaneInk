import "./Contact.css"
import dataCont from './dataCont'
import dataContTeams from './dataContTeams'
import leftArrow from "./icons/arrow-left.svg";
import rightArrow from "./icons/arrow-right.svg";

var slideIndex = 1

const nextSlide = () => {
    if(slideIndex !== dataContTeams.length){
        slideIndex = slideIndex + 1
        showSlide();
    } 
    else if (slideIndex === dataContTeams.length){
        slideIndex = 1
        showSlide() 
    }
}

const prevSlide = () => {
    if(slideIndex !== 1){
        slideIndex = slideIndex - 1
        showSlide();
    }
    else if (slideIndex === 1){
        slideIndex = dataContTeams.length;
        showSlide() ;
    }
}

function showSlide(){
    var name = document.getElementById("team-name");
    var members = document.getElementById("team-members");

    name.innerHTML = dataContTeams[slideIndex - 1].name;
    members.innerHTML = dataContTeams[slideIndex - 1].members;

    console.log(slideIndex);
}

function Contact(){
    return(
        <div className="container">
             <br/>
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

                <div className="divider"></div>

                <h2 className="cont-header">Meet The Teams</h2>
                <button onClick={nextSlide} className="contact-slide next">
                    <img src={rightArrow} alt='slider nav button next'/>
                </button>

                <button onClick={prevSlide} className="contact-slide prev">
                    <img src={leftArrow} alt='slider nav button prev'/>
                </button>

                <div className="container team">
                    <div className="team-box" onClick={nextSlide}>
                        <div className="team-content">
                            <h2 id="team-name">Awesome Anteaters</h2>
                            <p id="team-members">Mariana Salazar, Helen Ha, Jasmine Pham, April Tang</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;