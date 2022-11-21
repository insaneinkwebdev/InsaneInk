import "./TT.css"
import dataTT from './dataTT'
import placeholder from '../../images/placeholderImg.png'

function openModal(id, index){
    for(var i=0; i < dataTT.length; i++){
        if(dataTT[i].id === id){
            var modal = document.getElementById("modal");

            let product = document.getElementById("modal__product");
            let prodImg = document.getElementById("modal__img")
            let price = document.getElementById("modal__price")
            let desc = document.getElementById("modal__desc");

            console.log(dataTT[i]);

            product.innerHTML = dataTT[i].name;
            price.innerHTML = dataTT[i].price;
            desc.innerHTML = dataTT[i].description
            prodImg.src = process.env.PUBLIC_URL + `/TT/product_${index + 1}.png`

            modal.showModal(); 
        }
    }
}

function TT(){
    return(
        <div className="container">
            <h2 className="tt-header">Fall/Winter 2022 Collection 🍂</h2>
            <div className="container product">
                <div className="product-grid">
                    {dataTT.map((obj, index) => {
                        console.log(obj, index)
                        return(
                            <div className="card stacked">
                                <img src={process.env.PUBLIC_URL + `/TT/product_${index + 1}.png`} alt="product img" className="card__img" onClick={function(){
                                    openModal(obj.id, index)
                                }}/>
                                <div className="card__content">
                                    <h3 className="card__title">{obj.name}</h3>
                                    <p className="card__price">{obj.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <dialog className="modal" id="modal">
                <div className="modal__container">
                    <img id="modal__img" alt="product" src={placeholder}></img>
                    <div className="modal__content">
                        <h2 id="modal__product">Test modal</h2>
                        <p id="modal__price">$999</p>
                        <p id="modal__desc">This is sample text that should be dynamically changed on click. If you see this text... then oops</p>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default TT;