import "./Pages.css"
import Cover from "./sections/Home/Cover";
import Story from "./sections/Home/Story";
import Portfolio from "./sections/Home/Portfolio";
import Other from "./sections/Home/Other";

function Home(){
    return(
        <div className="container">
            <Cover/>
            <hr/>
            <Story/> 
            <hr/>
            <Portfolio/>
            <hr/>
            <Other/>
        </div>
    );
}

export default Home;