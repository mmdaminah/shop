import React, { useState, useEffect} from 'react'
import { RouteComponentProps } from 'react-router'
import { useParams, useLocation } from 'react-router'
import IProduct from '../../Interfaces/ProductInterface'
const ProductDetails = (props:RouteComponentProps) => {
    const [items, setItems] = useState<IProduct[]>([])
    const location = useLocation()
    const { id } = useParams<{id:string}>();
    const product = items.find(item=>item.id === id)
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
    useEffect(()=>{
        request(`/${category}`, ""+category)
    },[])
    
    return (
        <div style={{marginTop:"10rem"}}>{console.log(category)}
            <div>{product?.brand}</div>
            <div>{product?.category}</div>
            <div>{product?.price}</div>
            <div>{product?.model}</div>
        </div>
    )
}
export default ProductDetails;