import { useState } from "react";
const ProductSlider = () => {
    const [firstItem, setFirstItem] = useState(0);
    const numberOfItemsToShow = 4;
    const itemToSlide = 1;
    const items = ["bg-dark", "bg-success", "bg-primary", "bg-danger", "bg-warning","bg-success", "bg-primary", "bg-danger", "bg-warning"]
    const [itemsToShow, setItemsToShow] = useState(items.slice(0, numberOfItemsToShow))
    const handleRightSlide = () => {
        if (firstItem + numberOfItemsToShow !== items.length) {
            setFirstItem(firstItem + itemToSlide)
            setItemsToShow(items.slice(firstItem + itemToSlide, firstItem + itemToSlide + numberOfItemsToShow))
        }
    }
    const handleLeftSlide = () => {
        if(firstItem !== 0){
            setFirstItem(firstItem - itemToSlide)
            setItemsToShow(items.slice(firstItem-itemToSlide, firstItem - itemToSlide + numberOfItemsToShow))
        }
    }
    return (
        <div className="d-flex">
            <button onClick={handleRightSlide}>right</button>
            {
                itemsToShow.map((item, index) => (
                    <div key={index + item} className={`w-25 h-25 ${item}`}>2</div>)
                )
            }
            <button onClick={handleLeftSlide}>left</button>
        </div>
    )
}
export default ProductSlider;