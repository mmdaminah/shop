import { useState, useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard'
import IProduct from "../../Interfaces/ProductInterface";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);
const ProductSlider = (props: any) => {
    const [items, setItems] = useState<IProduct[]>([])
    const request = () => {
        fetch(props.url)
            .then(response => response.json())
            .then(result => {
                console.log(result.products)
                setItems(result.products)
            })
    }
    useEffect(() => {
        request();
    }, [])
    return (
        <div className={`d-flex flex-column my-5 ${props.background}`}>
            <div className="container">
                <div>
                    <h1>{props.title}</h1>
                </div>
                <Swiper
                    slidesPerView={4} 
                    spaceBetween={30} 
                    slidesPerGroup={4} 
                    loop={true} 
                    loopFillGroupWithBlank={true} 
                    pagination={{
                        "clickable": true
                    }} 
                    navigation={true} 
                    className="mySwiper mb-5 bg-white p-5"
                    style={{borderRadius:"10px"}}
                >
                    {
                        items?.map((item: IProduct) => {
                            return (
                                <SwiperSlide key={Math.random()*1000}>
                                    <ProductCard
                                        image={item.image}
                                        model={item.model}
                                        category={item.category}
                                        price={item.price}
                                    />
                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}
export default ProductSlider;