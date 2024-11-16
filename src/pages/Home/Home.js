import './Home.css'
import Cover from "./components/Cover";
import Story from "./components/Story";
import Portfolio from "./components/Portfolio";
import Fifty from "./components/5050"

function Home(){
    return(
        <div className="container">
            <Cover/>
            <hr/>
            <Story/> 
            {/* <hr/>
            <Portfolio/>
            <hr/>
            <Fifty/> */}
        </div>
    );
}

export default Home;