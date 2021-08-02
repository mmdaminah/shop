import './ProductCard.style.css'
import { useDispatch } from 'react-redux';
import React from 'react';
const ProductCard = ({image,model,category,price,btnColor="bg-success"}:any) => {
    const dispatch = useDispatch()
    const handleAddToCart = (event:React.MouseEvent)=>{
        event.stopPropagation()
        dispatch({type:"addProduct",payload:{model,category,price,image}})
    }
    return (
        <div className="product-card-container w-100" >
            <img className="w-100" src={image} alt="" />
            <div className="text-center"><h4>{model}</h4></div>
            <div className="text-center">{category}</div>
            <div className="text-center">{price}<span>تومان</span></div>
            <div className="text-center"><button onClick={handleAddToCart} className={`w-75 text-white btn ${"btn"+btnColor.slice(2)}`}>خرید</button></div>
        </div>
    )
}
export default ProductCard;