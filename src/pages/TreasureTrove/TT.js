import {useState} from 'react'
import dataTT from './dataTT'
import dataSlider from "./dataTTSlider"
import close from '../../images/close.svg'

import leftArrow from "./icons/arrow-left.svg";
import rightArrow from "./icons/arrow-right.svg";

import "./TT.css"

function openModal(id, pindex){
    slideIndex = 0;

    for(var i=0; i < dataTT.length; i++){
        continue
        if(dataTT[i].id === id){
            var sizeBoxContainer = document.getElementById("modal__size-container");
            var slideshowContainer = document.getElementById("modal__slideshow");
            var dotsContainer = document.getElementById("modal__dots-wrapper");

            dotsContainer.innerHTML = "";
            //slideshowContainer.innerHTML = "";
            sizeBoxContainer.innerHTML = "";

            var modal = document.getElementById("modal");

            let product = document.getElementById("modal__product");
            let price = document.getElementById("modal__price");
            let desc = document.getElementById("modal__desc");

            product.innerHTML = dataTT[i].name;
            price.innerHTML = dataTT[i].price;
            desc.innerHTML = dataTT[i].description;

            dataTT[i].sizes.map((obj) => {
                var sizeBoxContainer = document.getElementById("modal__size-container");
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
                
                sizeBoxContainer.appendChild(sizeBox);
                
                return(null)
            })

            dataSlider.map((obj, index) => {
                return null;
                if(index < dataTT[pindex].num_imgs){
                    var slideshowContainer = document.getElementById("modal__slideshow");
                    let slide = document.createElement("div");
                    let slideImg = document.createElement("img");

                    slide.className = index === 0 ? "modal__slide active-anim" : "modal__slide";
                    slide.id = "modal__slide";

                    slideImg.id = "modal__img";
                    slideImg.alt = "product";

                    slideImg.src = process.env.PUBLIC_URL + `/TT/product_${pindex + 1}/`+ dataTT[i].img_prefix + `${index + 1}.` + dataTT[i].img_suffix;

                    slide.appendChild(slideImg);
                    slideshowContainer.appendChild(slide);
                }
    
                return(null)
            })

            Array.from({length: dataSlider.length}).map((obj, index) => {
                if(index < dataTT[i].num_imgs){
                    var dotsContainer = document.getElementById("modal__dots-wrapper");
                    let dot = document.createElement("div");
                    
                    dot.className = index === 0 ? "dot active" : "dot";
                    //dot.onclick = () => {moveDot(index)};
                    dotsContainer.appendChild(dot);

                    return(null)
                }
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

var slideIndex = 1

const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
        slideIndex = slideIndex + 1
        showSlide(slideIndex);
    } 
    else if (slideIndex === dataSlider.length){
        slideIndex = 1
        showSlide(slideIndex) 
    }
}

const prevSlide = () => {
    if(slideIndex !== 1){
        slideIndex = slideIndex - 1
        showSlide(slideIndex);
    }
    else if (slideIndex === 1){
        slideIndex = dataSlider.length;
        showSlide(slideIndex) ;
    }
}

function showSlide(n){
    console.log(n - 1)

    let slides = document.getElementsByClassName("modal__slide");
    let dots = document.getElementsByClassName("dot")
    
    slides[n - 1].className = "modal__slide active-anim";
    dots[n - 1].className = "dot active";

    for(var i=0; i < dataSlider.length; i++){
        if(i !== (n - 1)){
            slides[i].className = "modal__slide"
            dots[i].className = "dot"
        }
    } 
}

/*function moveDot(n){
    slideIndex = n;
    console.log(slideIndex)

    let slides = document.getElementsByClassName("modal__slide");
    let dots = document.getElementsByClassName("dot")

    slides[n].className = "modal__slide active-anim";
    dots[n].className = "dot active";

    for(var i=0; i < dataSlider.length; i++){
        if(i !== (n)){
            slides[i].className = "modal__slide"
            dots[i].className = "dot"
        }
    } 
}*/

function TT(){
    // The React useState Hook allows us to track state in a function component.
    const [product, setProduct] = useState(dataTT[0]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [productSizeQuantity, setProductSizeQuantity] = useState(0);

    function updateSlide(sIndex) {
        if (sIndex >= product.images.length) {
            sIndex = 0
        }
        else if (sIndex < 0) {
            sIndex = product.images.length - 1;
        }
        setSlideIndex(sIndex);
    };

    return(
        <div className="container">
             <br/>
            <h2 className="tt-header">Fall/Winter 2023 Collection 🍂</h2>
            <div className="tt-store-box">
                <h3 className="tt-store">Store Hours (every Thursday): </h3>
                
                <div className="tt-hours">
                    <ul>
                         {/*<li className="tt-time">10:00 AM - 10:15 AM</li> */}
                        <li className="tt-time">11:55 AM - 12:25 PM</li>
                        {/*<li className="tt-time">02:00 PM - 02:35 PM</li>*/}
                        {/*<li className="tt-time">03:35 PM - 04:00 PM</li>*/}
                    </ul>
                </div>
            </div>

            <h3 className="tt-contact">Contact sales@insaneink.com for questions, comments, or concerns!</h3>

            <div className="container product">
                <div className="product-grid">
                    {dataTT.map((productObj, index) => {
                        return(
                            <div className="card stacked" key={productObj.id}>
                                <img src={productObj.images[0]} alt="product img" className="card__img"
                                    onClick={function() {
                                        setProduct(productObj);
                                        setSlideIndex(0);
                                        document.getElementById("modal").showModal();
                                    }}
                                />
                                <div className="card__content">
                                    <h3 className="card__title">{productObj.name}</h3>
                                    <p className="card__price">{productObj.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <dialog className="modal" id="modal">
                <div className="modal__container">
                    <div className='modal__slideshow-wrapper'>
                        <div id="modal__slideshow">
                            <div className="modal__slide active-anim" id="modal__slide">
                                <img id="modal__img" alt="product" src={product.images[slideIndex]}></img>
                            </div>
                        </div>
                        <button onClick={function() {updateSlide(slideIndex + 1)}} className="modal__btn-slide next">
                            <img src={rightArrow} alt='slider nav button next'/>
                        </button>

                        <button onClick={function() {updateSlide(slideIndex - 1)}} className="modal__btn-slide prev">
                            <img src={leftArrow} alt='slider nav button prev'/>
                        </button>

                        <div id="modal__dots-wrapper">
                            {product.images.map((obj, index) => {
                                return(
                                    <div className={"dot " + ((index === slideIndex) ? "active" : "")}></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="modal__content">
                        <h2 id="modal__product">{product.name}</h2>
                        <p id="modal__price">{product.price}</p>
                        <p id="modal__desc">{product.description}</p>

                        <div id="modal__inventory">
                            <h3 id="modal__inventory-header">Inventory (as of 11/1)</h3>
                            <div id="modal__size-container">
                                {product.sizes.map((obj, index) => {
                                        return(
                                            <div id="modal__size-box" key={index}
                                                className={"modal__size-box " +
                                                    ((obj.quant === 0) ? "oos" :
                                                    ((obj.quant < 5) ? "low" : "")) }
                                                onMouseEnter={function() {setProductSizeQuantity(obj.quant)}}
                                                onMouseLeave={function() {setProductSizeQuantity(0)}}
                                            >
                                                <p id="modal__size-text">
                                                    {obj.type}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div id="modal__inventory-notice-box" className="modal__inventory-notice-box"
                                 style={{ display: (productSizeQuantity > 0 && productSizeQuantity <= 5) ? "block": "none"}}
                                 >
                                <p id="modal__inventory-notice" className="modal__inventory-notice">Less than 5 left in stock!</p>
                            </div>
                        </div>

                        <p id="modal__disclaimer">Disclaimer: You cannot purchase items online</p>
                    </div>
                </div>
               
                <img id="modal__close" src={close} onClick={function() {document.getElementById("modal").close()}} alt="close modal"></img>
            </dialog>
        </div>
    );
}

export default TT;