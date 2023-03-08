import "./Dash.css"
import dashPortImg from './imgs/dashBtnPort.png'
import dashPortEvents from './imgs/dashBtnEvents.png'
import dashPortTT from './imgs/dashBtnTT.png'


function Dash(){
    return(
       <div className="container staff_dash">
            <div className="dash__left-box">
                <h2 className="dash__header left">Your Dashboard — February 8th, 2023</h2>
                <div className="dash__content left">
                    <div className="dash__row one">
                        <div className="dash__button portfolio">
                            <button id="dash__button"></button>
                            <img src={dashPortImg} alt="dash btn port background"></img>
                        </div>
                        <div className="dash__button events">
                            <button id="dash__button"></button>
                            <img src={dashPortEvents} alt="dash btn events background"></img>
                        </div>
                    </div>
                    <div className="dash__row two">
                        <div className="dash__button tt">
                            <button id="dash__button"></button>
                            <img src={dashPortTT} alt="dash btn tt background"></img>
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