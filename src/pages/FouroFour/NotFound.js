import notFound from "./FouroFour.png"
import './notFound.css';

function NotFound(){
    return(
        <div className="container fixed">
            <img src={notFound} className="notFoundImg"></img>
        </div>
    );
}

export default NotFound;