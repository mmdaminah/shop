import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useParams } from 'react-router-dom'
import IProduct from '../../Interfaces/ProductInterface'
export const Category = (props: RouteComponentProps) => {
    const [items, setItems] = useState<IProduct[]>([])
    const { name } = useParams<{ name: "string" }>()
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
                            <li style={{listStyle:"none"}}><input className="mx-1" type="checkbox" name="" id="" />Apple</li>
                            <li style={{listStyle:"none"}}><input className="mx-1" type="checkbox" name="" id="" />Samsung</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-wrap w-75">
                    {
                        items.map((item => (
                            <div key={item.id} className="w-25">
                                <ProductCard
                                    image={item.image}
                                    model={item.model}
                                    category={item.category}
                                    price={item.price}
                                />
                            </div>
                        )))
                    }
                </div>
            </div>
        </div>
    )
}
export default Category;