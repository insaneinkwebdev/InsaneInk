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
                    Check our <span className="Catalog"><a href="https://www.4brandedapparel.com">Online Catalog</a></span> and choose the items you like
                </p>
            </section>
            <section className="section two">
                <div className="section__step">
                    <h1>2</h1>
                </div>
                <p className="section__content">
                Contact us with the # of items, type of garment and graphic details (if one is not available we can help design it.) 
                </p>
            </section>
            <section className="section three">
                <div className="section__step">
                    <h1>3</h1>
                </div>  
                <p className="section__content">
                Our sales team will help determine if screen printing, direct-to-garment (DTG) printing or Direct-to-film (DTF) printing is best for your project! 
                    <br/><br/>
                    You will receive an email back within 24 hours!       
                </p>
            </section>
            <section className="section four">
                <div className="section__step">
                        <h1>4</h1>
                </div> 
                <p className="section__content">
                Once the details are finalized and quote approved, most all projects are completed within 10 working days.
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