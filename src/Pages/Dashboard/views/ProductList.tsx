import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Table } from 'react-bootstrap'
import IProduct from '../../../Interfaces/ProductInterface'
import DashboardModal from '../../../Components/DashboardModal/DashboardModal'
const ProductList = (props: RouteComponentProps) => {
    const [items, setItems] = useState<IProduct[]>([])
    const [modalItem, setModalItem] = useState<IProduct>({
        id:"",
        brand:"",
        category:"",
        model:"",
        price:"",
        image:""
    })
    const [show, setShow] = useState(false);
    const request = (url: string, name: string) => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                // console.log(result.products)
                setItems(result.products)
            })
    }
    useEffect(()=>request("/mobile","mobile"),[])
    const categoryChange = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement;
        request(`/${data.value}`, data.value)
    }
    const handleShow = (item:IProduct) => {
        setModalItem(item)
        setShow(true);
    }
    return (
        <div className="w-100">
            <div className="container">
                <label htmlFor="">دسته بندی</label>
                <select name="category" onChange={categoryChange} id="">
                    <option value="mobile">گوشی</option>
                    <option value="tablet">تبلت</option>
                    <option value="laptop">لپ تاپ</option>
                </select>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>برند</th>
                            <th>مدل</th>
                            <th>قیمت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item,index)=>{
                                return (
                                    <tr 
                                    key={index} 
                                    onClick={()=>handleShow(item)}
                                    style={{cursor:"pointer"}}
                                    >
                                        <td>{item.brand}</td>
                                        <td>{item.model}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <DashboardModal show={show} setShow={setShow} item={modalItem} />
            </div>
        </div>
    )
}
export default ProductList;