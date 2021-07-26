import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'react-bootstrap'
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
        <div style={{ marginTop: "10rem" }}>
            <div className="container">
                <span>{name}</span>
                <span> &lt; home</span>
            </div>
            <div className="container">
                <span>مرتب سازی به صورت:</span>
                <button>ارزانترین</button>
                <button>گرانترین</button>
                <button>جدیدترین</button>
            </div>
            <div className="container d-flex">
                <div className="">
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
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