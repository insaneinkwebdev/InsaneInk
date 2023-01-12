import "./About.css"

function About(){
    return(
        <div className="container fixed">
            <h2 className="about-header">About Us</h2>
            <section className="about__section">
                <p className="about__section__content">
                <span className="accent">Insane Ink</span> is an entrepreneurial course at Piedmont Hills High School that runs an apparel customization company. We offer silk screening, heat press, embroidery, Direct-to-Garment printing
                as well as  <span className="accent">other printing services</span> including posters and stickers!
                <br/><br/>
                The class was designed to give students <span className="accent">hands-on experience</span> in running a business and the fundamentals of economics.
                </p>

                <p className="about__section__content">
                We were <span className="accent">founded in 1998 by Mr. Mitch Method and Mr. Richard Langone</span> to allow students to experience entrepreneurship. 
                <br/><br/>
                Since then, Mr. Method advised each new incoming class until his retirement in 2020. Fortunately, a second advisor <span className="accent">Mrs. Diane Pereira joined the Insane Ink team in 2015</span>, 
                allowing her time to learn the ropes and prepare to lead young entrepreneurs. 
                <br/><br/>
                <span className="accent">Students are responsible</span> for running the company while Mrs. Pereira and the Executive Board advise and oversee the company. 
                </p>

                <p className="about__section__content">
                Insane Ink offers various custom apparel for <span className="accent">clubs, organizations, school classes, events, and other local businesses.</span> 
                <br/><br/>
                Not only are we here to supply quality services on behalf of our customers as a business, but we also <span className="accent">allocate 50% of our entire profit towards philanthropy</span> with our aim of giving back to the community. 
                <br/><br/>
                We at Insane Ink would love to work with you on whatever you need! 
                <br/><br/><br/>
                <span className="accent">— The Insane Ink Team</span>  
                </p>
            </section>
        </div>
    )
}

export default About;