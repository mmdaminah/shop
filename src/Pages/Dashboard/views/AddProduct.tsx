import React, { ChangeEvent, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import IProduct from '../../../Interfaces/ProductInterface'
import 'react-toastify/dist/ReactToastify.css';
const AddProduct = (props: RouteComponentProps) => {
    const [input, setInput] = useState<IProduct>({
        id: "",
        category: "",
        brand: "",
        model: "",
        image: "",
        price: ""
    })
    const [fileData, setFileData] = useState<Blob>(new Blob())
    const handleFormChange = (event: React.FormEvent) => {
        const data = event.target as HTMLInputElement
        setInput({ ...input, [data.name]: data.value })
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const data = new FormData()
        data.append('image', fileData)
        data.append('id', new Date().getTime().toString())
        data.append('category', input.category)
        data.append('brand', input.brand)
        data.append('model', input.model)
        data.append('price', input.price)
        data.append('image', "")
        fetch("/mobile", {
            method: 'post',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            //   },
            body: data
        })
        .then(()=>{
            toast.success('کالا اضافه شد', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch(err=>{
            console.log(err)
            toast.error('با مشکل مواجه شد', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }
    const handleFileChange = (event: ChangeEvent) => {
        const data = event.target as HTMLInputElement
        data.files && setFileData(data.files[0])
    }
    return (
        <div className="w-100">
            <div className="container">
                <form onSubmit={handleSubmit} onChange={handleFormChange} className="d-flex flex-column" action="">
                    <label htmlFor="">دسته</label>
                    <input name="category" className="w-25" type="text" />
                    <label htmlFor="">برند</label>
                    <input name="brand" className="w-25" type="text" />
                    <label htmlFor="">مدل</label>
                    <input name="model" className="w-25" type="text" />
                    <label htmlFor="">قیمت</label>
                    <input name="price" className="w-25" type="text" />
                    <input onChange={handleFileChange} type="file" />
                    <button className="w-25 btn btn-success">اضافه کن</button>
                </form>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
export default AddProduct;