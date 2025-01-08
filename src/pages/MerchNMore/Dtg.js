import "./Dtg.css";
import React, { useState } from "react";
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'

function Dtg() {
    return (
        <div className="container dtg">
            <h2 className="dtg-header">In-House Garment Printering</h2>

            <p className="dtg-info">
            For smaller orders, we can help you decide between Direct-to-Film and Direct-to-Garment which is often more affordable and allows us to provide you to from as little as 1 item to as many as 20 items - 
            we can print <strong>unlimited colors, photos and more!</strong> Everything is up to you!
                <br/><br/>
                No design? No worries! Our team of experienced designers will create a graphic made just for you!
            </p>

            <h3 className="dtg-contact">
                Contact <a href="mailto:sales@insaneink.com">sales@insaneink.com</a> for questions, comments, or concerns!
            </h3>

            <h3 className="dtg-order">
                Ready to Order?{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe9zJZ-uCy_V9G9BaALmpfgu_jRLjlxEANks7tDvVOCQqG_bg/viewform?usp=sf_link"
                >
                    DTG Order Form
                </a>
            </h3>

            <div className="header-box">
                <h1>Garments</h1>
            </div>

            <div className="dtg-images">
                <table className="image-table">
                    <tbody>
                        <tr>
                            <td><img src={one} alt="Sample 1" /></td>
                            <td><img src={two} alt="Sample 2" /></td>
                        </tr>
                        <tr>
                            <td><img src={three} alt="Sample 3" /></td>
                            <td><img src={four} alt="Sample 4" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="dtg-disclaimer">
                Our garments available in Ash Grey, Sports Grey, and White. Hoodies ONLY in black.
            </p>
            <p className="dtg-disclaimer">
                DTG sizes that are 2XL or bigger will be charged an extra $5 per item surcharge.
            </p>
        </div>
    );
}

export default Dtg;