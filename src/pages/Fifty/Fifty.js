import "./Fifty.css"
import placeholder from '../../components/img/placeholderImg.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Fifty(){
    return(
        <div className="container">
            <h2 className="fifty-header">Insane Ink Gives Back To The Community</h2>
            <div className="years">
                <div className="year 2022">
                    <h2 className="year__num">2021-2022</h2>
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
                            className="mySwiper"
                        >

                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </div>

                <div className="year 2021">
                    <h2 className="year__num">2020-2021</h2>
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
                            className="mySwiper"
                        >

                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide> 
                                <div className="year__card">
                                    <img className="year__card__img" alt="50/50 Concept Event" src={placeholder}></img>
                                    <div className="year__card__content">
                                        <h3>Sample Header</h3>
                                        <p>This is a sample description where I will copy and paste everything from the old website because I am
                                            lazy and I don't want to do a lot of work right now.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Fifty;