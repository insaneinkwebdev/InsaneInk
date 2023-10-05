import "./Fifty.css"
import dataFifty from './dataFifty'
import placeholder from '../../components/img/placeholderImg.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function openModal(title, bio, img){
    var modal = document.getElementById("mobile_modal");
    var modalImg = document.getElementById("mobile_modal__img");
    var modalTitle = document.getElementById("mobile_modal__title");
    var modalBio = document.getElementById("mobile_modal__bio");

    modalImg.src = img;
    modalTitle.innerHTML = title;
    modalBio.innerHTML = bio;
    modal.showModal();
}

function closeModal(){
    var modal = document.getElementById("mobile_modal");
    modal.close();
}

function Fifty(){
    return(
        <div className="container">
            <h2 className="fifty-header">The 50/50 Concept</h2>
            <div className="years_desktop">
            <div className="year 2023">
                    <h2 className="year__num">2023-2024</h2>
                    <section className="year__content">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={
                                {
                                    550: {
                                        slidesPerView: 1,
                                        spaceBetweenSlides: 100
                                    },

                                    599: {
                                        slidesPerView: 3,
                                        spaceBetweenSlides: 5
                                    }
                                }
                            }
                            className="mySwiper"
                        >
                            {dataFifty[0].images.map((obj)=> {
                                return(
                                    <SwiperSlide> 
                                        <div className="year__frame">
                                            <div className="year__card">
                                                <img className="year__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src}></img>

                                                <div className="year__card__content">
                                                    <h3>{obj.title}</h3>
                                                    <p>{obj.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}                
                        </Swiper>
                    </section>
                </div>

                <div className="year 2022">
                    <h2 className="year__num">2020-2022</h2>
                    <section className="year__content">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={
                                {
                                    550: {
                                        slidesPerView: 1,
                                        spaceBetweenSlides: 100
                                    },

                                    599: {
                                        slidesPerView: 3,
                                        spaceBetweenSlides: 5
                                    }
                                }
                            }
                            className="mySwiper"
                        >
                            {dataFifty[1].images.map((obj)=> {
                                return(
                                    <SwiperSlide> 
                                        <div className="year__frame">
                                            <div className="year__card">
                                                <img className="year__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src}></img>

                                                <div className="year__card__content">
                                                    <h3>{obj.title}</h3>
                                                    <p>{obj.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}                
                        </Swiper>
                    </section>
                </div>

                <div className="year 2020">
                    <h2 className="year__num">2019-2020</h2>
                    <section className="year__content">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={
                                {
                                    550: {
                                        slidesPerView: 1,
                                        spaceBetweenSlides: 100
                                    },

                                    599: {
                                        slidesPerView: 3,
                                        spaceBetweenSlides: 5
                                    }
                                }
                            }
                            className="mySwiper"
                        >
                            {dataFifty[2].images.map((obj)=> {
                                return(
                                    <SwiperSlide> 
                                        <div className="year__frame">
                                            <div className="year__card">
                                                <img className="year__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src}></img>
                                                <div className="year__card__content">
                                                    <h3>{obj.title}</h3>
                                                    <p>{obj.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}                
                        </Swiper>
                    </section>
                </div>

                <div className="year 2019">
                    <h2 className="year__num">2018-2019</h2>
                    <section className="year__content">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={
                                {
                                    550: {
                                        slidesPerView: 1,
                                        spaceBetweenSlides: 100
                                    },

                                    599: {
                                        slidesPerView: 3,
                                        spaceBetweenSlides: 5
                                    }
                                }
                            }
                            className="mySwiper"
                        >
                            {dataFifty[3].images.map((obj)=> {
                                return(
                                    <SwiperSlide> 
                                        <div className="year__frame">
                                            <div className="year__card">
                                                <img className="year__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src}></img>
                                                <div className="year__card__content">
                                                    <h3>{obj.title}</h3>
                                                    <p>{obj.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}                
                        </Swiper>
                    </section>
                </div>

                <div className="year 2018">
                    <h2 className="year__num">2017-2018</h2>
                    <section className="year__content">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={
                                {
                                    550: {
                                        slidesPerView: 1,
                                        spaceBetweenSlides: 100
                                    },

                                    599: {
                                        slidesPerView: 3,
                                        spaceBetweenSlides: 5
                                    }
                                }
                            }
                            className="mySwiper"
                        >
                            {dataFifty[4].images.map((obj)=> {
                                return(
                                    <SwiperSlide> 
                                        <div className="year__frame">
                                            <div className="year__card">
                                                <img className="year__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src}></img>
                                                <div className="year__card__content">
                                                    <h3>{obj.title}</h3>
                                                    <p>{obj.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}                
                        </Swiper>
                    </section>
                </div>

                <div className="year 2017">
                    <h2 className="year__num">2016-2017</h2>
                    <section className="year__content">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={
                                {
                                    550: {
                                        slidesPerView: 1,
                                        spaceBetweenSlides: 100
                                    },

                                    599: {
                                        slidesPerView: 3,
                                        spaceBetweenSlides: 5
                                    }
                                }
                            }
                            className="mySwiper"
                        >
                            {dataFifty[5].images.map((obj)=> {
                                return(
                                    <SwiperSlide> 
                                        <div className="year__frame">
                                            <div className="year__card">
                                                <img className="year__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src}></img>
                                                <div className="year__card__content">
                                                    <h3>{obj.title}</h3>
                                                    <p>{obj.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}                
                        </Swiper>
                    </section>
                </div>

                <div className="year 2016">
                    <h2 className="year__num">2013-2016</h2>
                    <section className="year__content">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            slidesPerGroup={3}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            breakpoints={
                                {
                                    550: {
                                        slidesPerView: 1,
                                        spaceBetweenSlides: 100
                                    },

                                    599: {
                                        slidesPerView: 3,
                                        spaceBetweenSlides: 5
                                    }
                                }
                            }
                            className="mySwiper"
                        >
                            {dataFifty[6].images.map((obj)=> {
                                return(
                                    <SwiperSlide> 
                                        <div className="year__frame">
                                            <div className="year__card">
                                                <img className="year__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src}></img>
                                                <div className="year__card__content">
                                                    <h3>{obj.title}</h3>
                                                    <p>{obj.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}                
                        </Swiper>
                    </section>
                </div>
            </div>

            <div className="years_mobile">
                <div className="myear 2023">
                    <h2 className="year__num">2022-2023</h2>
                    <section className="mobile__content">
                        {dataFifty[0].images.map((obj)=> {
                            return(
                                <div className="mobile__card">
                                    <img className="mobile__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src} onClick={()=> {
                                        openModal(obj.title, obj.bio, obj.src)
                                    }}></img>
                                </div>)
                        })}                
                    </section>
                </div>

                <div className="myear 2022">
                    <h2 className="year__num">2020-2022</h2>
                    <section className="mobile__content">
                        {dataFifty[1].images.map((obj)=> {
                            return(
                                <div className="mobile__card">
                                    <img className="mobile__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src} onClick={()=> {
                                        openModal(obj.title, obj.bio, obj.src)
                                    }}></img>
                                </div>)
                        })}                
                    </section>
                </div>

                <div className="myear 2020">
                    <h2 className="year__num">2019-2020</h2>
                    <section className="mobile__content">
                        {dataFifty[2].images.map((obj)=> {
                            return(
                                <div className="mobile__card">
                                    <img className="mobile__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src} onClick={()=> {
                                        openModal(obj.title, obj.bio, obj.src)
                                    }}></img>
                                </div>)
                        })}                
                    </section>
                </div>

                <div className="myear 2019">
                    <h2 className="year__num">2018-2019</h2>
                    <section className="mobile__content">
                        {dataFifty[3].images.map((obj)=> {
                            return(
                                <div className="mobile__card">
                                    <img className="mobile__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src} onClick={()=> {
                                        openModal(obj.title, obj.bio, obj.src)
                                    }}></img>
                                </div>)
                        })}                
                    </section>
                </div>

                <div className="myear 2018">
                    <h2 className="year__num">2018-2019</h2>
                    <section className="mobile__content">
                        {dataFifty[4].images.map((obj)=> {
                            return(
                                <div className="mobile__card">
                                    <img className="mobile__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src} onClick={()=> {
                                        openModal(obj.title, obj.bio, obj.src)
                                    }}></img>
                                </div>)
                        })}                
                    </section>
                </div>

                <div className="myear 2017">
                    <h2 className="year__num">2017-2018</h2>
                    <section className="mobile__content">
                        {dataFifty[5].images.map((obj)=> {
                            return(
                                <div className="mobile__card">
                                    <img className="mobile__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src} onClick={()=> {
                                        openModal(obj.title, obj.bio, obj.src)
                                    }}></img>
                                </div>)
                        })}                
                    </section>
                </div>

                <div className="myear 2016">
                    <h2 className="year__num">2013-2016</h2>
                    <section className="mobile__content">
                        {dataFifty[6].images.map((obj)=> {
                            return(
                                <div className="mobile__card">
                                    <img className="mobile__card__img" alt="50/50 Concept Event" data-src={placeholder} src={obj.src} onClick={()=> {
                                        openModal(obj.title, obj.bio, obj.src)
                                    }}></img>
                                </div>)
                        })}                
                    </section>
                </div>
            </div>

            <dialog className="mobile_modal"  id="mobile_modal">
                <div className="mobile_modal__container">
                    <div className="mobile_modal__img__card">
                        <img className="mobile_modal__img" id="mobile_modal__img" alt="50/50 Concept Event" src={placeholder}></img>
                    </div>
                    <div className="mobile_modal__content">
                        <h1 className="mobile_modal__title" id="mobile_modal__title">Placeholder</h1>
                        <p className="mobile_modal__bio" id="mobile_modal__bio"></p>
                    </div>

                    <button className="mobile_modal__closeBtn" onClick={closeModal}>Close</button>
                </div>
            </dialog>
        </div>
    );
}

export default Fifty;