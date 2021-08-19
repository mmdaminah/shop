import './ProductCard.style.css'
import { useDispatch } from 'react-redux';
import React from 'react';
const ProductCard = ({id,image,model,category,price,btnColor="bg-success"}:any) => {
    const dispatch = useDispatch()
    const handleAddToCart = (event:React.MouseEvent)=>{
        event.stopPropagation()
        dispatch({type:"addProduct",payload:{id,model,category,price,image}})
    }
    return (
        <div className="product-card-container w-100" >
            <div className="text-center"><img className="" src={image} alt="" /></div>
            <div className="text-center"><h4>{model}</h4></div>
            <div className="text-center">{category}</div>
            <div className="text-center" style={{color:"#3Bc9a7"}}>{price}<span style={{color:"#3Bc9a7"}}>تومان</span></div>
            <div className="text-center"><button onClick={handleAddToCart} className={`w-75 text-white btn ${"btn"+btnColor.slice(2)}`}>خرید</button></div>
        </div>
    )
}
export default ProductCard;