import "./Roland.css"
import printPricing from './images/rolandPricing.png'
import heatPricing from './images/heatpress.png'
import Checklist from './images/Check.png'
import Shipping from './images/shipping.png'
import Production from './images/production.png'

function Roland(){
    return(
        <div className="container rol">
            <br/>
            <div id="print-shop">
                <h2 className="rol-header">Specialty Printing</h2>
                
                <h3 className="rol-order">
                    Ready to Order? <a  target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSceGwbnH_UiX3J3fX4LuMdTO5S9Et1GfS3SwYmhZiOz_q4png/viewform?usp=sf_link">Large Format Printer Order Form (stickers, posters, flyers)</a>
                    &nbsp; | &nbsp;
                    <a  target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfA53Yxx7pCLVPewdOMhCQIQY2WX3Fcjk3dCl5VP8fu6UtJeA/viewform?usp=sf_link">Heat Press Order Form</a>
                </h3>

                <p className="rol-disclaimer">
                    Once a form is submitted, an Insane Ink representative will be in contact to verify pricing before project is started.
                </p>

                <h3 className="rol-contact">Contact sales@insaneink.com for questions, comments, or concerns!</h3>

                <hr></hr>

                <h3 className="rol-contact limit-header">DTF Process</h3>
                <p className="rol-disclaimer1">Innovative DTF transfers are bringing more vibrant colors, versatility and durability to the printing world. <br></br>This next revolution in printing technique is set to become the most popular, helping you bring your most creative ideas to life.</p>
                <div className="list">
                    <div className="box">
                        <img src={Checklist} alt="Checklist process" className="Check" />
                        <h4 className="box-title">Upload designs & request quote</h4>
                        <p className="box-body">Use this <a href="https://forms.gle/W5k4ZPCvwuaSCxFa9">form</a> to request a quote. If you don't have an image, you can work with our talented graphic designers to create a design at no additional charge!</p>
                    </div>
                    <div className="box">
                        <img src={Shipping} alt="Shipping process" className="Check" />
                        <h4 className="box-title">Orders are processed & shipped to us</h4>
                        <p className="box-body">We create detailed, high quality, full color direct-to-film transfers. We offer many different garments and goods availble to you all in one place. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className="box">
                        <img src={Production} alt="Production process" className="Check" />
                        <h4 className="box-title">Production</h4>
                        <p className="box-body">You will receive your fully-completed, heat pressed items within 10 business days. We do all the work, you enjoy the beautiful, high-quality goods. We will reach out to you with shipping details later.</p>
                    </div>
                </div>

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
                    We can print <b>&nbsp;stickers, posters, and flyers&nbsp;</b> using our large format printing and cutting machine-our Large Format Printer! For<b> &nbsp;Printer prices</b>, see the charts below. 
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