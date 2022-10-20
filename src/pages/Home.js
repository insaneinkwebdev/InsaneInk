import "./Pages.css"
import Cover from "./sections/Home/Cover";
import Story from "./sections/Home/Story";
import Portfolio from "./sections/Home/Portfolio";
import Other from "./sections/Home/Other";
import Fifty from "./sections/Home/5050"

function Home(){
    return(
        <div className="container">
            <Cover/>
            <hr/>
            <Story/> 
            <hr/>
            <Portfolio/>
            <hr/>
            <Fifty/>
            <hr/>
            <Other/>
        </div>
    );
}

export default Home;