import "./TT.css"
import dataTT from './dataTT'


function TT(){
    return(
        <div className="container">
            <h2 className="tt-header">Products</h2>
            <div className="container product">
                <div className="product-grid">
                    {dataTT.map((obj, index) => {
                        console.log(obj, index)
                        return(
                            <div className="card stacked">
                                <img src={process.env.PUBLIC_URL + `/TT/${index + 1}.png`} alt="product img" className="card__img"/>
                                <div className="card__content">
                                    <h3 className="card__title">{obj.name}</h3>
                                    <p className="card__price">{obj.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default TT;