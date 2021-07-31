import './ProductCard.style.css'
const ProductCard = (props:any) => {
    return (
        <div className="product-card-container w-100" >
            <img className="w-100" src={props.image} alt="" />
            <div className="text-center"><h4>{props.model}</h4></div>
            <div className="text-center">{props.category}</div>
            <div className="text-center">{props.price}<span>تومان</span></div>
            <div className="text-center"><button className="w-75 btn btn-success">خرید</button></div>
        </div>
    )
}
export default ProductCard;