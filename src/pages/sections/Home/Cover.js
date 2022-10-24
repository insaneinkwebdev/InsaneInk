import React from "react";
import Slider from "./components/Slider/Slider";
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
            </section>
        </>
    );
}

export default Cover;