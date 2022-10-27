import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    const GSbutton = document.getElementById("openlink");
    var link;

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }

        console.log(slideIndex)

        if(slideIndex === dataSlider.length){
            link = dataSlider[0].link;
        }else {
            link = dataSlider[slideIndex].link;
        }

        console.log(link)
        GSbutton.href = link;

        if(link === null){
            GSbutton.style.display = "none";
        } else{
            GSbutton.style.display = "block";
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }

        if(slideIndex === dataSlider.length){
            link = dataSlider[0].link;
        }else {
            link = dataSlider[slideIndex].link;
        }

        console.log(link)
        GSbutton.href = link;

        if(link === null){
            GSbutton.style.display = "none";
        } else{
            GSbutton.style.display = "block";
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div>
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img 
                            src={process.env.PUBLIC_URL + `/slideshow/slide${index + 1}.jpg`} 
                            alt="slider img" onMouseDown={function(){nextSlide()}}/>
                        </div>
                    )
                })}
                <BtnSlider moveSlide={function(){nextSlide()}} direction={"next"} />
                <BtnSlider moveSlide={function(){prevSlide()}} direction={"prev"}/>

                <div className="container-dots">
                    {Array.from({length: dataSlider.length}).map((item, index) => (
                        <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>

            <div className='container-button'>
                <a id='openlink' href='https://insaneink.com' target="_blank" rel="noreferrer"><button>Get Started</button></a>
            </div>
        </div>
    )
}