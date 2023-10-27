import "./Roland.css"
import printPricing from './images/roland.png'
import heatPricing from './images/heatpress.png'

function Roland(){
    return(
        <div className="container rol">
            <br/>
            <div id="print-shop">
                <h2 className="rol-header">Print Shop</h2>
                
                <p className="rol-info">
                    Insane Ink owns a large format printing/cutting machine, allowing us to print <b>stickers, posters, and flyers</b> 🤯
                </p>
                <h3 className="rol-contact">Contact sales@insaneink.com for questions, comments, or concerns!</h3>

                <h3 className="rol-order">Ready to Order? <a  target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSe-PAAQu2jWN493-tq5oqoftYFc9Zr23tPf2kLaowO1kVJRyg/viewform">Roland Order Form</a></h3>

                <div className="rol-pricing-wrapper">
                    <img src={printPricing} alt="rol pricing sheet" className="rol-pricing"></img>
                </div>
            </div>

            <div className="divider"></div>

            <div id="heat-shop">
                <h2 className="rol-header">Heat Press</h2>
                
                <p className="rol-info">
                    With our large format printer, we can also print designs on vinyl to heat press onto apparel!
                </p>

                <h3 className="rol-order">Ready to Order? <a  target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScQio4TmKhnVIR3jxrQQ1fsVJkQxXS0s16BULIFR4EYIfwfvw/viewform">Heat Press Form</a></h3>

                <div className="rol-pricing-wrapper">
                    <img src={heatPricing} alt="rol pricing sheet" className="rol-pricing"></img>
                </div>

                <p className="rol-disclaimer">
                    This option is only available for orders of 20 shirts or less. 
                    We can only print on white or gray shirts and sizes 2XL & 3XL are in limited supply.
                </p>

                <h3 className="rol-contact limit-header">Limitations:</h3>
                <p className="rol-info limit">
                    If there are any small details that might be difficult to weed out or if the outer color of the design is not consistent, we will add a cut line. 
                    You can choose either a white outline or a Pantone color of your choice as the cut line.
                    We recommend choosing an outline color that matches the color of the product so the outline is less apparent.
                </p>
            </div>
        </div>
    );
}

export default Roland;