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
    }, [])
    const  handlePaginationClick = (event:React.MouseEvent)=>{
        const data = event.target as HTMLElement
        console.log(data.id)
        setpagination(+data.id*4)
    }
    return (
        <div style={{ marginTop: "8rem" }}>
            <div className="container">
                <span>{name}</span>
                <span> &lt; home</span>
            </div>
            <div className="container my-3">
                <span>مرتب سازی به صورت:</span>
                <Button className="mx-2" variant="outline-secondary">ارزانترین</Button>
                <Button className="mx-2" variant="outline-secondary">گرانترین</Button>
                <Button className="mx-2" variant="outline-secondary">جدیدترین</Button>
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
                <div className="d-flex flex-wrap w-75">
                    {
                        items.map(((item,index) => {
                            if(index >= pagination && index <= pagination+Math.ceil(items.length/4))
                            return (
                                <div onClick={() => history.push(`/productdetails${item.id}?category=${item.category}`)} key={item.id+Math.random()} className="w-25">
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