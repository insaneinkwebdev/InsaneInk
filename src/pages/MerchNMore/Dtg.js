import "./Dtg.css"
import pricing from './images/dtgSheet.png'

function Dtg(){
    return(
        <div className="container dtg">
            <h2 className="dtg-header">Direct to Garment</h2>
            
            <p className="dtg-info">
                The go-to for small quantity merch! Simply give us a design and watch the magic happen 🔮<br/>
                No design? No worries! Our team of experienced designers will design a graphic made just for you!
            </p>
            <h3 className="dtg-contact">Contact dtginsaneink@gmail.com for questions, comments, or concerns!</h3>

            <div className="dtg-pricing-wrapper">
                <img src={pricing} alt="dtg pricing sheet" className="dtg-pricing"></img>
            </div>
            
            <p className="dtg-disclaimer">
                This option is only available for orders of 20 shirts or less. 
                There is a $10 fee if you would like us to design a graphic. 
                We can print designs of any color EXCEPT white
            </p>
            <h3 className="dtg-order">Ready to Order? <a  target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSevXFdVognmHv5LXfupJu9Ddhhh-BRSAhIsWAmjhJX_SzeMzA/viewform">DTG Order Form</a></h3>
        </div>
    );
}

export default Dtg;