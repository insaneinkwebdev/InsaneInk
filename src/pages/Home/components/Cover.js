import React from "react";
import Slider from "./Slider/Slider";
import tapIcon from '../../../images/index/tapIcon.jpg'

function Cover(){
    return(
        <>
            <section className="coverSec" aria-label="Cover Screen">
                {/*<div className="a-banner">
                    <p className="a-banner-content">
                        <font size = "+3">
                            <strong className="a-banner-header">Opening Message:&nbsp;&nbsp;
                            </strong>
                        </font> 
                        Check out <a className="a-banner-link" href="https://insaneink.com/theprocess.php">our order process</a> for information on how to get started!</p>
                    </div>*/}
                <Slider/>
                <img src={tapIcon} width="35%" className="tapIcon" alt="tap the screen to change the slideshow"/>
            </section>
        </>
    );
}

export default Cover;