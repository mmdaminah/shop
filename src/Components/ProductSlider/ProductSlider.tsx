import { useState, useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard'
import IProduct from "../../Interfaces/ProductInterface";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from "react-router";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);
const ProductSlider = (props: any) => {
    const [items, setItems] = useState<IProduct[]>([])
    const history = useHistory()
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
        window.addEventListener("resize",()=>{
            setWindowWith(window.innerWidth)
        })
    }, [])
    const [windowWidth,setWindowWith] = useState(window.innerWidth)
    return (
        <div className={`d-flex flex-column my-5`} style={{background:props.color}}>
            <div className="container">
                <div className="my-4">
                    <h1 className="text-white">{props.title}</h1>
                </div>
                <Swiper
                    slidesPerView={windowWidth < 500 ? 1.5 : 4}
                    spaceBetween={windowWidth < 500 ? 5 : 20}
                    slidesPerGroup={windowWidth < 500 ? 1 : 4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={windowWidth < 500 ? false : {
                        "clickable": true
                    }}
                    navigation={windowWidth < 500 ? false : true}
                    className="mySwiper mb-5 bg-white p-lg-5"
                    style={{ borderRadius: "10px" }}
                >
                    {
                        items?.map((item: IProduct) => {
                            return (
                                <SwiperSlide key={Math.random() * 1000}>
                                    <div
                                        onClick={() => history.push(`/productdetails${item.id}?category=${item.category}`)}
                                    >
                                        <ProductCard
                                            image={item.image}
                                            model={item.model}
                                            category={item.category}
                                            price={item.price}
                                            btnColor={props.background}
                                        />
                                    </div>
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