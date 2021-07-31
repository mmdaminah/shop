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
        <div className={`d-flex flex-column p-4 my-4 ${props.background}`}>
            <div className="container">
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
                    className="mySwiper"
                >
                    {
                        items?.map((item: IProduct) => {
                            return (
                                <SwiperSlide key={item.id}>
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