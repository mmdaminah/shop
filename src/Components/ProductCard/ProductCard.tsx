import './ProductCard.style.css'
const ProductCard = (props:any) => {
    return (
        <div className="product-card-container rounded-3 m-5" >
            <div className="d-flex justify-content-end"><button >like</button></div>
            <img className="w-100 h-75" src={props.img} alt="" />
            <div className="text-center"><h4>title</h4></div>
            <div className="text-center">categoty</div>
            <div className="text-center">price</div>
            <div className="text-center"><button className="w-75 btn btn-success">buy</button></div>
        </div>
    )
}
export default ProductCard;