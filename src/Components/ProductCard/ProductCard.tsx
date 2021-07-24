import './ProductCard.style.css'
const ProductCard = ()=>{
    return (
        <div className="product-card-container">
            <img className="w-100 h-75" src="https://crdms.images.consumerreports.org/c_lfill,w_598/prod/products/cr/models/402431-smartphones-apple-iphone-12-10016496.png" alt="" />
            <h4>title</h4>
            <p>categoty</p>
            <div className="d-flex">
                <p>price</p>
                <button>buy</button>
            </div>
        </div>
    )
}
export default ProductCard;