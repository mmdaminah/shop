import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import IProduct from '../../Interfaces/ProductInterface';
const DashboardModal = (props: any) => {
    const [input, setInput] = useState<IProduct>({
        id: "",
        category: "",
        brand: "",
        model: "",
        image: "",
        price:""
    })
    const handleFormChange = (event:React.FormEvent)=> {
        const data = event.target as HTMLInputElement
        setInput({...input,[data.name]:data.value})
    }
    const handleClose = () => props.setShow(false);
    const handleDelete = (category:string,id:string) => {
        console.log(category,id)
        fetch(`/mobile${id}`,{
            method:'post',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            //   },
        })
    }
    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form  
                onChange={handleFormChange}
                className="d-flex flex-column" action="">
                    <label htmlFor="">دسته</label>
                    <input defaultValue={props.item?.category} name="category" className="w-100" type="text" />
                    <label htmlFor="">برند</label>
                    <input defaultValue={props.item?.brand} name="brand" className="w-100" type="text" />
                    <label htmlFor="">مدل</label>
                    <input defaultValue={props.item?.model} name="model" className="w-100" type="text" />
                    <label htmlFor="">قیمت</label>
                    <input defaultValue={props.item?.price} name="price" className="w-100" type="text" />
                    <input type="file" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    انصراف
                </Button>
                <Button variant="outline-danger" 
                onClick={()=>handleDelete(props.item?.category,props.item?.id)}>
                    حذف این محصول
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    ذخیره تغییرات
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default DashboardModal;