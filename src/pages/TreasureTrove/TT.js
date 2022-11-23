import "./TT.css"
import dataTT from './dataTT'
import placeholder from '../../images/placeholderImg.png'
import close from '../../images/close.svg'
import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'

function openModal(id, index){
    for(var i=0; i < dataTT.length; i++){
        if(dataTT[i].id === id){
            var sizeBoxContainer = document.getElementById("modal__size-container");

            if(sizeBoxContainer.hasChildNodes()){
                sizeBoxContainer.innerHTML = "";
            }

            var modal = document.getElementById("modal");

            let product = document.getElementById("modal__product");
            let price = document.getElementById("modal__price");
            let desc = document.getElementById("modal__desc");

            let prodImg = document.getElementById("modal__img");

            product.innerHTML = dataTT[i].name;
            price.innerHTML = dataTT[i].price;
            desc.innerHTML = dataTT[i].description;

            prodImg.src = process.env.PUBLIC_URL + `/TT/product_${index + 1}/img_1.png`;

            dataTT[i].sizes.map((obj) => {
                var sbContainer = document.getElementById("modal__size-container");
                let sizeBox = document.createElement("div");
                let size = document.createElement("p");

                size.innerHTML = obj.type; 
                size.id = "modal__size-text"
                sizeBox.appendChild(size);

                sizeBox.id = "modal__size-box";
                
                if(obj.quant >= 5){
                    sizeBox.className = "modal__size-box";
                } else if (obj.quant !== 0 && obj.quant < 5){
                    sizeBox.className = "modal__size-box low";
                    sizeBox.onmouseover = showNotice;
                    sizeBox.onmouseout = hideNotice;
                } else {
                    sizeBox.className = "modal__size-box oos";
                }
                
                sbContainer.appendChild(sizeBox);

                return(null)
            })

            modal.showModal(); 
        }
    }
}

function closeModal(){
    var modal = document.getElementById("modal");
    modal.close();
}

function showNotice(){
    var notice = document.getElementById("modal__inventory-notice-box");
    notice.style.display = "block"
}

function hideNotice(){
    var notice = document.getElementById("modal__inventory-notice-box");
    notice.style.display = "none"
}

function TT(){
    return(
        <div className="container">
            <h2 className="tt-header">Fall/Winter 2022 Collection 🍂</h2>
            <div className="container product">
                <div className="product-grid">
                    {dataTT.map((obj, index) => {
                        return(
                            <div className="card stacked" key={obj.id}>
                                <img src={process.env.PUBLIC_URL + `/TT/product_${index + 1}/img_1.png`} alt="product img" className="card__img" onClick={function(){
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

                        <div id="modal__inventory">
                            <h3 id="modal__inventory-header">Inventory (as of 11/22)</h3>
                            <div id="modal__inventory-notice-box" className="modal__inventory-notice-box">
                                <p id="modal__inventory-notice" className="modal__inventory-notice">Notice: Less than 5 left in stock!</p>
                            </div>
                        </div>

                        <div id="modal__sharebox-wrapper">
                            <div id="modal__share-box" className="modal__share-box">
                                <img className="modal__share-icon" src={twitter} alt="tweet product on twitter"></img>
                            </div>
                            <div id="modal__share-box" className="modal__share-box">
                                <img className="modal__share-icon" src={facebook} alt="share product on facebook"></img>
                            </div>
                        </div>
                    </div>
                </div>
               
                <img id="modal__close" src={close} onClick={closeModal} alt="close modal"></img>
            </dialog>
        </div>
    );
}

export default TT;