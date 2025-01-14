import "./Process.css"

function Process(){
    return(
        <div  className="container">
            
            <h2 className="process-header">How To Order</h2>
            <center>
            <p className="section__intro">
                We offer screening, direct-to-garment printing and direct-to-film printing - we can help you decide what is best for you!

                </p>
                </center>
           <div className="sections">
            <section className="section one">
                <div className="section__step">
                    <h1>1</h1>
                </div>  
                <p className="section__content">
                    Check our <span className="Catalog"><a href="https://www.4brandedapparel.com">Online Catalog</a></span> and choose the items you like or let us know what you are generally interested in and we can help you select your goods!


                </p>
            </section>
            <section className="section two">
                <div className="section__step">
                    <h1>2</h1>
                </div>
                <p className="section__content">
                Contact us with the # of items, type of garment and graphic details (if one is not available we can design it.)
                Email: sales@insaneink.com
                </p>
                
            </section>
            <section className="section three">
                <div className="section__step">
                    <h1>3</h1>
                </div>  
                <p className="section__content">
                    <br/><br/>
                    You will receive an email back within 24 hours!       
                </p>
            </section>
            <section className="section four">
                <div className="section__step">
                        <h1>4</h1>
                </div> 
                <p className="section__content">
                Once the details are finalized and quote is approved, most all of the projects are completed within ten working days.
                The quote is all-inclusive.
                </p>
            </section>
           </div>
        </div>
    )
}

export default Process;