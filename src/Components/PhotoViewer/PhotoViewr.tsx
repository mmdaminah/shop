import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
    Navigation, Thumbs
} from 'swiper/core';
SwiperCore.use([Navigation, Thumbs]);
const PhotoViewr = (props:any) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <div className="w-100">
            <Swiper 
            style={{width:"100%"}} 
            spaceBetween={10} 
            navigation={true} 
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper mb-2 w-100 h-100">
                <SwiperSlide><img className="w-100 h-100 px-5" src={props.photo} /></SwiperSlide>
            </Swiper>
            <Swiper 
            style={{width:"100%",height:"100px"}} 
             onSwiper={setThumbsSwiper}
             spaceBetween={5}
             slidesPerView={3.5} 
             freeMode={true} 
             watchSlidesVisibility={true} 
             watchSlidesProgress={true} 
             className="mySwiper">
                <SwiperSlide><img style={{border:"1px solid #4c5e60",borderRadius:"3px"}} className="w-100 h-100" src={props.photo} /></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default PhotoViewr;