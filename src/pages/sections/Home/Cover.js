import React, { useState } from "react";
import Slider from "./components/Slider";
function Cover(){
    return(
        <>
            <section className="coverScreen" aria-label="Cover Screen">
                <Slider/>
            </section>
        </>
    );
}

export default Cover;