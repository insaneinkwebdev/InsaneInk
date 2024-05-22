import "./Roland.css"
import printPricing from './images/rolandPricing.png'
import heatPricing from './images/heatpress.png'

function Roland(){
    return(
        <div className="container rol">
            <br/>
            <div id="print-shop">
                <h2 className="rol-header">Specialty Printing</h2>
                
                <h3 className="rol-order">
                    Ready to Order? <a  target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSceGwbnH_UiX3J3fX4LuMdTO5S9Et1GfS3SwYmhZiOz_q4png/viewform?usp=sf_link">Roland Order Form (stickers, posters, flyers)</a>
                    &nbsp; | &nbsp;
                    <a  target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfA53Yxx7pCLVPewdOMhCQIQY2WX3Fcjk3dCl5VP8fu6UtJeA/viewform?usp=sf_link">Heat Press Order Form</a>
                </h3>

                <p className="rol-disclaimer">
                    Once a form is submitted, an Insane Ink representative will be in contact to verify pricing before project is started.
                </p>

                <h3 className="rol-contact">Contact sales@insaneink.com for questions, comments, or concerns!</h3>

                <hr></hr>

                <h3 className="rol-contact limit-header">Heat Press</h3>

                <p className="rol-info">
                    With our large format printer, we can print designs on vinyl to heat press onto apparel!     
                    <b>&nbsp;Heat press items will be priced after order details are reviewed. </b>
                </p>

                <p className="rol-disclaimer">
                    A cut line may be added if there are small details or if the design's outer color is inconsistent. 
                    For this cutline, you may choose a white outline or a Pantone color of your choice (we recommend matching outline color to product color so outline is less apparent).
                </p>

                <h3 className="rol-contact limit-header">Print Shop</h3>

                <p className="rol-info">
                    We can print <b>&nbsp;stickers, posters, and flyers&nbsp;</b> using our large format printing and cutting machine-our Roland! For <b> &nbsp;Roland prices</b>, see the charts below. 
                </p>



                <div className="rol-pricing-wrapper">
                    <img src={printPricing} alt="rol pricing sheet" className="rol-pricing"></img>
                </div>

                <br></br>
                <br></br>
                
            </div>

            {/*
                <div className="rol-pricing-wrapper">
                    <img src={heatPricing} alt="rol pricing sheet" className="rol-pricing"></img>
                </div>
            */}

        
        </div>
    );
}

export default Roland;