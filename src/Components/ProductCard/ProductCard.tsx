import './ProductCard.style.css'
const ProductCard = (props:any) => {
    return (
        <div className="product-card-container w-100" >
            <div className="d-flex justify-content-end"><button >like</button></div>
            <img className="w-100" src={props.image} alt="" />
            <div className="text-center"><h4>{props.model}</h4></div>
            <div className="text-center">{props.category}</div>
            <div className="text-center">price</div>
            <div className="text-center"><button className="w-75 btn btn-success">buy</button></div>
        </div>
    )
}
export default ProductCard;