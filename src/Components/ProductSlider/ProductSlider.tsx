import { useState, useEffect } from "react";
interface IMobile {
    id:string;
    category:string;
    brand:string;
    model:string;
    image?:string
}
const ProductSlider = () => {
    const [items, setItems] = useState<IMobile[]>([])
    const [itemsShow, setItemsShow] = useState<IMobile[]>([])
    const [startItem,setStartItem] = useState(0)
    const itemToSlide = 1;
    const itemsToShow = 4;
    const request = ()=> {
        fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(result=> {
            console.log(result)
            setItems(result)
        })
    }
    const requestLocal = ()=> {
        fetch("/mobile")
        .then(response => response.json())
        .then(result=> {
            console.log(result.phones)
            setItems(result.phones)
        })
    }
    useEffect(()=>{
        requestLocal();
    }, [])
    // useEffect(()=>setItemsShow(items.slice(0,1)),[items])
    const handleRight = ()=>{
        const start = startItem + itemToSlide;
        const end = startItem + itemToSlide + itemsToShow
        setStartItem(startItem + itemToSlide)
        setItemsShow(items.slice(start,end))
    }
    const handleLeft = ()=>{
        
    }
    return (
        <div className="d-flex flex-column"><img src={items[0].image} alt="" />
            <h1>title</h1>{console.log(items[0])}
            <div className="d-flex">
                <button onClick={handleRight}>right</button>
                {
                    itemsShow?.map((item:any)=>{
                        return (
                            <img style={{width:'100px',height:"100px"}} src={item.avatar_url} alt="" />
                        )
                    })
                }
                <button onClick={handleLeft}>left</button>
            </div>
        </div>
    )
}
export default ProductSlider;