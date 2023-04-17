import "./Dash.css"
import dashPortImg from './imgs/dashBtnPort.png'
import dashPortEvents from './imgs/dashBtnEvents.png'
import dashPortTT from './imgs/dashBtnTT.png'


function Dash(){
    let domain = window.location.href;
    if(domain.split('/dashboard')[1] === ""){
        try{
            let session = JSON.parse(localStorage.getItem("session")).session_id
            console.log(session)
            window.location.href = "/dashboard?session_id=" + session
        }
        catch(e){
            console.log(e)
            window.location.href = "/staff";
        }
    }

    return(
       <div className="container staff_dash">
            <div className="dash__left-box">
                <h2 className="dash__header left">Your Dashboard — February 8th, 2023</h2>
                <div className="dash__content left">
                    <div className="dash__row one">
                        <div className="dash__button portfolio">
                            <button id="dash__button"></button>
                            <img src={dashPortImg} alt="dash btn port background"></img>
                            <div className="dash__button__title">
                                <h1 id="dash__button__title">Portfolio Images</h1>
                            </div>
                        </div>
                        <div className="dash__button events">
                            <button id="dash__button"></button>
                            <img src={dashPortEvents} alt="dash btn events background"></img>
                            <div className="dash__button__title">
                                <h1 id="dash__button__title">50/50 Concept Events</h1>
                            </div>
                        </div>
                    </div>
                    <div className="dash__row two">
                        <div className="dash__button tt">
                            <button id="dash__button"></button>
                            <img src={dashPortTT} alt="dash btn tt background"></img>
                            <div className="dash__button__title">
                                <h1 id="dash__button__title">Treasure Trove Items</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dash__right-box">
                <h2 className="dash__header right"> Recent Changes</h2>
            </div>
        </div>
    )
}

export default Dash;