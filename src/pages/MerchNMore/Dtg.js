import "./Dtg.css"
import pricing from './images/dtgSheet.png'

function Dtg(){
    return(
        <div className="container dtg">
            <br/>
            <h2 className="dtg-header">Direct to Garment (In-House T-Shirt Printer)</h2>
            
            <p className="dtg-info">
                In House DTG printing allows you to print from as little as 1 item to as many as 20 items! With DTG, you can print <strong>unlimited colors, photos and more!</strong> Everything is up to you!

                No design? No worries! Our team of experienced designers will design a graphic made just for you! 
            </p>
            <h3 className="dtg-contact">Contact sales@insaneink.com for questions, comments, or concerns!</h3>
            
            <h3 className="dtg-order">Ready to Order? <a  target="_blank" rel="noreferrer" href="https://forms.gle/RNe1n8QYViJwoLMZ8">DTG Order Form</a></h3>

            <div className="dtg-samples">
                <img src={process.env.PUBLIC_URL + `/printshop/dtgsamples.png`} alt="DTG samples" className="samplesImg"></img>
            </div>

            <div className="dtg-pricing-wrapper">
                <img src={pricing} alt="dtg pricing sheet" className="dtg-pricing"></img>
            </div>
            
            <p className="dtg-disclaimer">
                Only available for orders of 20 shirts or less. 
                There is a $10 fee if you would like us to design a graphic. 
                We can print designs of any color EXCEPT white.
            </p>
        </div>
    );
}

export default Dtg;