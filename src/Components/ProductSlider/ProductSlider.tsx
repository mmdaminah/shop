import { useState, useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard'
interface IMobile {
    id: string;
    category: string;
    brand: string;
    model: string;
    image: string
}
const ProductSlider = (props:any) => {
    const [items, setItems] = useState<IMobile[]>([])
    const [itemsShow, setItemsShow] = useState<IMobile[]>([])
    const [startItem, setStartItem] = useState(0)
    const itemToSlide = 1;
    const itemsToShow = 4;
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
    useEffect(() => setItemsShow(items.slice(0, 4)), [items])
    const handleRight = () => {
        const start = startItem + itemToSlide;
        const end = startItem + itemToSlide + itemsToShow
        if (end !== items.length + 1) {
            setStartItem(startItem + itemToSlide)
            setItemsShow(items.slice(start, end))
        }
    }
    const handleLeft = () => {
        const start = startItem - itemToSlide;
        const end = startItem - itemToSlide + itemsToShow
        if (start >= 0) {
            setStartItem(startItem - itemToSlide)
            setItemsShow(items.slice(start, end))
        }
    }
    return (
        <div className={`d-flex flex-column p-4 my-4 ${props.background}`}>
            <div className="container">
                <h1>{props.title}</h1>
                <div className="d-flex align-items-center"
                    style={{border:"1px solid black"}}
                >
                    <button className="h-25 " onClick={handleRight}>right</button>
                    {
                        itemsShow?.map((item: IMobile) => {
                            return (
                                <ProductCard
                                    key={item.id}
                                    image={item.image}
                                    model={item.model}
                                    category={item.category}
                                />
                            )
                        })
                    }
                    <button onClick={handleLeft}>left</button>
                </div>
            </div>
        </div>
    )
}
export default ProductSlider;