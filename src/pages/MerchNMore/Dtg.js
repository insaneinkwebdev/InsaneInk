import "./Dtg.css";
import React, { useState } from "react";
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'
import { Color } from "three.js";

function Dtg() {
    return (
        <div className="container-dtg">
            <h2 className="dtg-header">Custom Goods Orders</h2>

            <p className="dtg-info">
            For orders of more than 20 items or unique items such as blankets and bags, etc, please email <a href="mailto:sales@insaneink.com">sales@insaneink.com</a>
                <br></br>
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
                    href="https://docs.google.com/forms/d/1jLJypmvWc-eZujKIPIpFYa0N5IxoiyAJMZ0J_m1kPW0/viewform"
                >
                    Small QTY Goods Order Form
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
                Garments available in Ash Grey, Sports Grey, and White. Hoodies ONLY in black.
            </p>
            <p className="dtg-disclaimer">
                Sizes that are 2XL or bigger will be charged an extra $5 per item surcharge.
            </p>    
            <div className="dtg-table">
                <table className="info-table">
                    <tbody>
                        <tr>
                            <td>DTF</td>
                            <td>
                                <li>All garment colors availble, these include black, white, ash and sports gray. Other colors must be ordered for a fee.</li>
                                <li>Vector based graphics only. (SVG, AI, EPS, PDF),<div className="inline">Insane Ink is not responsible for the quality of graphics provided if not in the above format.</div></li>
                                <li>Possible to print white and colors stay vibrant</li>
                                <li>Works by heating a film onto the garment</li>
                            </td>
                        </tr>
                        <tr>
                            <td>DTG</td>
                            <td>
                                <li>Items availble in white, ash and sports gray. Any other light colored garments must be ordered for a fee.</li>
                                <li>Possible to print any picture. Any graphic with solid white is not possible to print.</li>
                                <li>Has a retro design impact</li>
                                <li>Garments are dyed with ink directly</li>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    );
    
}

export default Dtg;