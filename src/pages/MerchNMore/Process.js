import "./Process.css"

function Process(){
    return(
        <div  className="container">
          
            <h2 className="process-header">How To Order</h2>
           <div className="sections">
            <section className="section one">
                <div className="section__step">
                    <h1>1</h1>
                </div>  
                <p className="section__content">
                    Check our Online Catalog and choose the items you like
                </p>
            </section>
            <section className="section two">
                <div className="section__step">
                    <h1>2</h1>
                </div>
                <p className="section__content">
                    Contact us with the # of items, the type of garment, and the colors and placement of the design for a free quote
                </p>
            </section>
            <section className="section three">
                <div className="section__step">
                    <h1>3</h1>
                </div>  
                <p className="section__content">
                    Our teams will work with you on a graphic and will always be available to answer any questions you may have
                    <br/><br/>
                    We respond in less than 24 hours!       
                </p>
            </section>
            <section className="section four">
                <div className="section__step">
                        <h1>4</h1>
                </div> 
                <p className="section__content">
                    Once you approve the graphic, the order will go into our screening phase
                    <br/><br/>
                    This usually takes around 2 weeks
                </p>
            </section>
            <section className="section five">
                <div className="section__step">
                        <h1>5</h1>
                </div> 
                <p className="section__content">
                    Once the order is complete, we can deliver the complete order or you can arrange a pickup
                    <br/><br/>
                    Our costs include tax and delivery
                </p>
            </section>
           </div>
        </div>
    )
}

export default Process;