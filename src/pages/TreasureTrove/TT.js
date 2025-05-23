import { useState } from 'react';

import dataTT from './dataTT'
import dataSlider from "./dataTTSlider"
import close from '../../images/close.svg'

import leftArrow from "./icons/arrow-left.svg";
import rightArrow from "./icons/arrow-right.svg";

import "./TT.css"

function openModal(id, pindex){
    slideIndex = 1

    for(var i=0; i < dataTT.length; i++){
        if(dataTT[i].id === id){
            var sizeBoxContainer = document.getElementById("modal__size-container");
            var slideshowContainer = document.getElementById("modal__slideshow");
            var dotsContainer = document.getElementById("modal__dots-wrapper");

            dotsContainer.innerHTML = "";
            slideshowContainer.innerHTML = "";
            sizeBoxContainer.innerHTML = "";

            var modal = document.getElementById("modal");

            let product = document.getElementById("modal__product");
            let price = document.getElementById("modal__price");
            let desc = document.getElementById("modal__desc");

            product.innerHTML = dataTT[i].name;
            desc.innerHTML = dataTT[i].description;
            price.innerHTML = dataTT[i].price;
            
            {/*
            price.innerHTML = "<s>" + (dataTT[i].old_price ? dataTT[i].old_price : "") + "</s>";
            price.innerHTML += "<strong>" + (dataTT[i].old_price ? " ➡ " : "") + "</strong>";
            price.innerHTML += "<strong>" + dataTT[i].price +"</strong>";
            use this when you have a sale*/}

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
                if(index < dataTT[pindex].num_imgs){
                    var slideshowContainer = document.getElementById("modal__slideshow");
                    let slide = document.createElement("div");
                    let slideImg = document.createElement("img");

                    slide.className = index === 0 ? "modal__slide active-anim" : "modal__slide";
                    slide.id = "modal__slide";

                    slideImg.id = "modal__img";
                    slideImg.alt = "product";

                    slideImg.src = process.env.PUBLIC_URL + `/TT/product_${pindex + 1}/`+ dataTT[pindex].img_prefix + `${index + 1}.` + dataTT[pindex].img_suffix;

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
    const [product, setProduct] = useState(dataTT[0]);

    return(
        <div className="container">
            {/*
            <div>
                
                <h2 id= "currentspecials">Current Specials!</h2>
                <h3 className="tt-store">Check out what current specials Insane Ink has to offer!</h3>

                <div className="specials">
                    <div><img className="specialImg" src="/TT/specials/ttClearance.jpg"></img></div>
                    <div><a href='https://forms.gle/ZyydkEMcihydoY4L6'><img className="specialImg" src="/TT/specials/calicoCritter.png"></img></a></div>
                    <br />
                </div>
            </div>
            
            <hr></hr>
            <br />
            */}
            
            <h2 className="tt-header" id="currentcollection">Treasure Trove Collection </h2>
            <div className="tt-store-box">
                
                <h3 className="tt-store">Store Hours: </h3>
                
                <div className="tt-hours">
                    <p className="tt-time">Treasure Trove has closed for the 2024-2025 school year!</p>
                    <ul>
                        {/*<li className="tt-time">Thursdays at Noon and by appointment</li>*/}
                    </ul>
                </div>
            </div>
            <h3 className="tt-explanation">Treasure Trove is your go-to spot for all things PHHS! </h3>
            <h3 className="tt-explanation">Featuring student-designed clothing and headwear, our merch keeps Pirate supporters geared up in style!</h3>
            <h3 className="tt-explanation">Catch us on campus or at pop-up events during school sporting events and after-school events—don’t miss out on showing your Pirate pride! 🏴‍☠️
            </h3>

            <h3 className="tt-contact">Contact sales@insaneink.com for questions, comments, or concerns!</h3>
            
            {/*<div className='NewItem'>
                <hr></hr>
                <h2 className='NIT'>! Limited Time Offer !</h2>
                <div className='NewImage'>
                    <img src={process.env.PUBLIC_URL + `/TT/NewItem3.png`} alt="Treasure Trove Item" className="card__img1"/>
                </div>
            </div>*/}
            
            <br></br>
            <br></br>
            <br></br>

            <div className="container product">
                <div className="product-grid">
                    {dataTT.map((obj, index) => {
                        return(
                            <div className="card stacked" key={obj.id}>
                                <img src={process.env.PUBLIC_URL + `/TT/product_${index + 1}/` + obj.img_prefix + "1." + obj.img_suffix} alt="product img" className="card__img" 
                                onClick={function(){
                                    setProduct(obj)
                                    openModal(obj.id, index)
                                }}/>
                                <div className="card__content">
                                    <h3 className="card__title">{obj.name}</h3>
                                    <p className="card__price"> 
                                        {obj.old_price}
                                        
                                        {/*<s>{obj.old_price ? obj.old_price : ""}</s>
                                        <strong>{obj.old_price ? " ➡ " : ""}</strong>
                                        <strong>{obj.price}</strong>  this section is when you have a sale*/}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <dialog className="modal" id="modal">
                <div className="modal__container">
                    <div className='modal__slideshow-wrapper'>
                        <div id="modal__slideshow"></div>
                        <button onClick={nextSlide} className="modal__btn-slide next">
                            <img src={rightArrow} alt='slider nav button next'/>
                        </button>

                        <button onClick={prevSlide} className="modal__btn-slide prev">
                            <img src={leftArrow} alt='slider nav button prev'/>
                        </button>

                        <div id="modal__dots-wrapper"></div>
                    </div>
                    <div className="modal__content">
                        <h2 id="modal__product">Test modal</h2>
                        <p id="modal__price">$999</p>
                        <p id="modal__desc">This is sample text that should be dynamically changed on click. If you see this text... then oops</p>

                        <div id="modal__inventory" style={
                            {display: (product.name == "Current Specials") ? "none": "block"}
                            }>
                            <h3 id="modal__inventory-header">Inventory (as of 4/18)</h3>
                            <div id="modal__size-container"></div>
                            <div id="modal__inventory-notice-box" className="modal__inventory-notice-box">
                                <p id="modal__inventory-notice" className="modal__inventory-notice">Less than 5 left in stock!</p>
                            </div>
                        </div>

                        <p id="modal__disclaimer">Disclaimer: You cannot purchase items online. </p>
                    </div>
                </div>
               
                <img id="modal__close" src={close} onClick={closeModal} alt="close modal"></img>
            </dialog>
        </div>
    );
}

export default TT;