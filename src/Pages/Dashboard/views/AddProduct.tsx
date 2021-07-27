import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'

const AddProduct = (props: RouteComponentProps) => {
    const [input, setInput] = useState({})
    const handleFormChange = (event:React.FormEvent)=> {
        const data = event.target as HTMLInputElement
        setInput({...input,[data.name]:data.value})
    }
    const handleSubmit = (event:React.FormEvent)=>{
        event.preventDefault()
        fetch("/mobile",{
            method:'post',
            body:JSON.stringify(input)
        })
    }
    return (
        <div className="w-100">
            <div className="container">
                <form onSubmit={handleSubmit} onChange={handleFormChange} className="d-flex flex-column" action="">
                    <label htmlFor="">برند</label>
                    <input name="brand" className="w-25" type="text" />
                    <label htmlFor="">مدل</label>
                    <input name="model" className="w-25" type="text" />
                    <label htmlFor="">قیمت</label>
                    <input name="price" className="w-25" type="text" />
                    <button className="w-25 btn btn-success">اضافه کن</button>
                </form>
            </div>
        </div>
    )
}
export default AddProduct;