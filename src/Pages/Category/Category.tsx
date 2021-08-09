import React, { useState, useEffect } from 'react'
import { Button, Pagination } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useParams, useHistory } from 'react-router-dom'
import IProduct from '../../Interfaces/ProductInterface'
export const Category = (props: RouteComponentProps) => {
    const [pagination,setpagination]=useState(0)
    const [items, setItems] = useState<IProduct[]>([])
    const { name } = useParams<{ name: "string" }>()
    const history = useHistory()
    const request = () => {
        fetch("/" + name)
            .then(response => response.json())
            .then(result => {
                console.log(result.products)
                setItems(result.products)
            })
    }
    useEffect(() => {
        request();
    }, [name])
    const  handlePaginationClick = (event:React.MouseEvent)=>{
        const data = event.target as HTMLElement
        console.log(data.id)
        setpagination(+data.id*4)
    }
    const handlePriceButton = (order:string)=>{
        switch (order) {
            case "fromCheap":
                setItems([...items.sort((a,b)=> +a.price - +b.price)])
                break; 
            case "fromExpensive":
                setItems([...items.sort((a,b)=> +b.price - +a.price)])
                break;
            case "fromNewest":
                setItems([...items.sort((a,b)=> +b.id - +a.id)])
                break;
        }
    }
    return (
        <div style={{ marginTop: "8rem" }}>
            <div className="container p-3 p-lg-0">
                <span>{name}</span>
                <span style={{cursor:"pointer"}} onClick={()=>history.push("/homepage")}> &lt; home</span>
            </div>
            <div className="container my-3">
                <span>مرتب سازی به صورت:</span>
                <Button onClick={()=>handlePriceButton("fromCheap")} className="mx-2" variant="outline-secondary">ارزانترین</Button>
                <Button onClick={()=>handlePriceButton("fromExpensive")} className="mx-2" variant="outline-secondary">گرانترین</Button>
                <Button onClick={()=>handlePriceButton("fromNewest")} className="mx-2" variant="outline-secondary">جدیدترین</Button>
            </div>
            <div className="container d-flex my-5">
                <div className="mt-5">
                    <div><strong>برند</strong></div>
                    <div>
                        <ul>
                            <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />Apple</li>
                            <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />Samsung</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-center flex-wrap w-75 mx-auto ">
                    {
                        items.map(((item,index) => {
                            if(index >= pagination && index <= pagination+Math.ceil(items.length/4))
                            return (
                                <div 
                                onClick={() => history.push(`/productdetails${item.id}?category=${item.category}`)} 
                                key={item.id+Math.random()}
                                className={window.innerWidth < 500 ? "w-50":"w-25"}>
                                    <ProductCard
                                        image={item.image}
                                        model={item.model}
                                        category={item.category}
                                        price={item.price}
                                    />
                                </div>
                        )}))
                    }
                </div>
            </div>
            <Pagination className="d-flex justify-content-center flex-row-reverse">
                <Pagination.Next />
                <Pagination.Last />
                {
                    items.map((item,index)=>{
                        if(index%4===0)
                        return(
                            <Pagination.Item key={Math.random()} id={`${index/4}`} onClick={handlePaginationClick}>{index/4+1}</Pagination.Item>
                        )
                    })
                }
                <Pagination.First />
                <Pagination.Prev />
            </Pagination>
        </div>
    )
}
export default Category;