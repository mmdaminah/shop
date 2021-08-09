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
            style={{width:"100%",height:"400px"}} 
            spaceBetween={10} 
            navigation={true} 
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper mb-2 w-100">
                <SwiperSlide><img className="w-100 h-100 p-5" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100 p-5" src="https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/before-after/s7-before-ed6ae655510032cc0796d90544c22618cae884e7ede7af2e0a9bdb8d7bb0e554.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100 p-5" src="https://imgr.co/images/12-greenery_greeny_bug.jpg" /></SwiperSlide>
                <SwiperSlide><img className="w-100 h-100 p-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" /></SwiperSlide>
            </Swiper>
            <Swiper 
            style={{width:"100%",height:"100px"}} 
             onSwiper={setThumbsSwiper}
             spaceBetween={5}
             slidesPerView={4} 
             freeMode={true} 
             watchSlidesVisibility={true} 
             watchSlidesProgress={true} 
             className="mySwiper">
                <SwiperSlide><img style={{border:"1px solid #4c5e60",borderRadius:"3px"}} className="w-100 h-100" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" /></SwiperSlide>
                <SwiperSlide><img style={{border:"1px solid #4c5e60",borderRadius:"3px"}} className="w-100 h-100" src="https://static.remove.bg/remove-bg-web/3661dd45c31a4ff23941855a7e4cedbbf6973643/assets/before-after/s7-before-ed6ae655510032cc0796d90544c22618cae884e7ede7af2e0a9bdb8d7bb0e554.jpg" /></SwiperSlide>
                <SwiperSlide><img style={{border:"1px solid #4c5e60",borderRadius:"3px"}} className="w-100 h-100" src="https://imgr.co/images/12-greenery_greeny_bug.jpg" /></SwiperSlide>
                <SwiperSlide><img style={{border:"1px solid #4c5e60",borderRadius:"3px"}} className="w-100 h-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" /></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default PhotoViewr;