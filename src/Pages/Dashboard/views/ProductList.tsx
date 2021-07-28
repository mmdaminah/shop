import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Table } from 'react-bootstrap'
import IProduct from '../../../Interfaces/ProductInterface'
const ProductList = (props: RouteComponentProps) => {
    const [items, setItems] = useState<IProduct[]>([])
    const request = (url: string, name: string) => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                // console.log(result.products)
                setItems(result.products)
            })
    }
    const categoryChange = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement;
        request(`/${data.value}`, data.value)
    }
    return (
        <div className="w-100">{console.log(items)}
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
                            <th>تغییرات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{item.brand}</td>
                                        <td>{item.model}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default ProductList;