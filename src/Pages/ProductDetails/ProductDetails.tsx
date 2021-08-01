import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { useParams, useLocation } from 'react-router'
import IProduct from '../../Interfaces/ProductInterface'
import PhotoViewr from '../../Components/PhotoViewer/PhotoViewr'
const ProductDetails = (props: RouteComponentProps) => {
    const [items, setItems] = useState<IProduct[]>([])
    const location = useLocation()
    const { id } = useParams<{ id: string }>();
    const product = items.find(item => item.id === id)
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category")
    const request = (url: string, name: string) => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result.products)
                setItems(result.products)
            })
    }
    useEffect(() => {
        request(`/${category}`, "" + category)
    }, [])

    return (
        <div className="w-100" style={{ marginTop: "10rem" }}>
            <div className="container w-100">
                <div className="w-100 d-flex">
                    <div className="w-50">
                        <PhotoViewr />
                    </div>
                    <div className="w-50">
                        <div>{product?.brand}</div>
                        <div>{product?.category}</div>
                        <div>{product?.price}</div>
                        <div>{product?.model}</div>
                    </div>
                </div>
                <div><h1>text</h1></div>
                <div><h1>text</h1></div>
                <div><h1>text</h1></div>
                <div><h1>text</h1></div>
                <div><h1>text</h1></div>
                <div><h1>text</h1></div>
            </div>
        </div>
    )
}
export default ProductDetails;