import "./Portfolio.css"
import dataPort from './dataPort'

function specYear(year){
    var container = document.getElementById("port-grid");
    var title = document.getElementById("port-title");

    for(var i=0; i < dataPort.length; i++){
        if(dataPort[i].year === year){
            title.innerHTML = year;
            container.innerHTML = "";
            dataPort[i].images.map((obj)=> {
                var card = document.createElement("div");
                card.className = "port-card " + obj.type;

                let img_wrapper = document.createElement("div");
                img_wrapper.className = "port-img-wrapper";

                let img = document.createElement("img");

                if(obj.isWhite === false){
                    img.className = "port-img"
                } else {
                    img.className = "port-img white"
                }

                img.src = process.env.PUBLIC_URL + obj.src;
                img.alt = obj.name;

                img_wrapper.appendChild(img);

                let portName = document.createElement("h3");
                portName.className = "port-name";
                portName.innerHTML = obj.name;

                card.appendChild(img_wrapper);
                card.appendChild(portName);

                container.appendChild(card);

                return (null)
            })
        }
    }
}

function specType(type){
    var container = document.getElementById("port-grid");
    var title = document.getElementById("port-title");

    container.innerHTML = "";

    if(type === "other-school"){
        title.innerHTML = "Other School"
    } else {
        title.innerHTML = type.charAt(0).toUpperCase() + type.slice(1);
    }

    for(var i=0; i < dataPort.length; i++){
        dataPort[i].images.map((obj)=> {
            if(obj.type === type){
                var card = document.createElement("div");
                card.className = "port-card " + obj.type;

                let img_wrapper = document.createElement("div");
                img_wrapper.className = "port-img-wrapper";

                let img = document.createElement("img");

                if(obj.isWhite === false){
                    img.className = "port-img"
                } else {
                    img.className = "port-img white"
                }

                img.src = process.env.PUBLIC_URL + obj.src;
                img.alt = obj.name;

                img_wrapper.appendChild(img);

                let portName = document.createElement("h3");
                portName.className = "port-name";
                portName.innerHTML = obj.name;

                card.appendChild(img_wrapper);
                card.appendChild(portName);

                container.appendChild(card);
            }
            return(null)
        })
    }
}

function Portfolio(){
    return(
        <div className="container">
             <br/>
            <h2>Our Past Projects</h2>
            <br/>
            <h2 className="port-subheader">Insane Ink has had the honor of working with other clubs, businesses and individuals to print the following designs on shirts, fleece, posters and more. 
                While Insane Ink did not necesarily design all of the graphics below, we would be happy to print whatever design you have, or our one of our many trained graphic desingers can help you to create one!</h2>
            <div className="port-sel-wrapper">
                {dataPort.map((obj, index) => {
                    return(
                        <button className="port-sel" id={obj.year} onClick={()=>{
                            specYear(obj.year)
                        }}>{obj.year}</button>
                    )
                })}
                <button className="port-sel" id="class" onClick={()=>{specType(("class"))}}>Class</button>
                <button className="port-sel" id="club" onClick={()=>{specType(("club"))}}>Club</button>
                <button className="port-sel" id="other-school" onClick={()=>{specType(("other-school"))}}>Other School</button>
                <button className="port-sel" id="other" onClick={()=>{specType(("other"))}}>Other</button>
            </div>

            <div className="port-divider"></div>

            <h3 className="port-title" id="port-title">2023-2024</h3>
            <div className="port-grid" id="port-grid">
                {dataPort[0].images.map((obj, index)=> {
                   
                    return(
                        <div className="port-card" id={obj.type}>
                            <div className="port-img-wrapper">
                                <img className={obj.isWhite === false ? "port-img" : "port-img white"} src={obj.src} alt={obj.name}/>
                            </div>
                            <h3 className="port-name">{obj.name}</h3>
                        </div>
                    )
                      
                    
                })}
            </div>
        </div>
    );
}

export default Portfolio;