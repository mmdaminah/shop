import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
    Navigation, Thumbs
} from 'swiper/core';
SwiperCore.use([Navigation, Thumbs]);
const PhotoViewr = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <div className="w-100">
            <Swiper 
            style={{width:"300px",height:"300px"}} 
            spaceBetween={10} 
            navigation={true} 
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2 mb-2">
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
            </Swiper>
            <Swiper 
             onSwiper={setThumbsSwiper}
             spaceBetween={10}
             slidesPerView={4} 
             freeMode={true} 
             watchSlidesVisibility={true} 
             watchSlidesProgress={true} 
             className="mySwiper">
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100" src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default PhotoViewr;