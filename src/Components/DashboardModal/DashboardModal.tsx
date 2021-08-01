import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import IProduct from '../../Interfaces/ProductInterface';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface IProps {
    show: boolean;
    setShow: Function;
    item: IProduct
}
const DashboardModal = ({ show, setShow, item }: IProps) => {
    const [input, setInput] = useState<IProduct>(item)
    useEffect(() => {
        setInput(item)
    }, [item])
    const handleFormChange = (event: React.FormEvent) => {
        const data = event.target as HTMLInputElement
        setInput({ ...input, [data.name]: data.value })
    }
    const handleClose = () => setShow(false);
    const handleDelete = (category: string, id: string) => {
        fetch(`/mobile${id}`, {
            method: 'post',
        })
        .then(()=>{
            toast.error('با موفقیت حذف شد', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        handleClose()
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const data = new FormData()
        data.append('id', input.id)
        data.append('category', input.category)
        data.append('brand', input.brand)
        data.append('model', input.model)
        data.append('price', input.price)
        data.append('image', input.image)
        fetch(`/editmobile${input.id}`, {
            method: 'post',
            body: data
        })
            .then((res) => {
                toast.info('با موفقیت ویرایش شد', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            })
            .catch((err=>{
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
            }))
        handleClose()
    }
    return (
        <div>
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
            <Modal show={show} onHide={handleClose}>{console.log(input)}
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        id="form"
                        onChange={handleFormChange}
                        className="d-flex flex-column" action=""
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="">دسته</label>
                        <input defaultValue={item?.category} name="category" className="w-100" type="text" />
                        <label htmlFor="">برند</label>
                        <input defaultValue={item?.brand} name="brand" className="w-100" type="text" />
                        <label htmlFor="">مدل</label>
                        <input defaultValue={item?.model} name="model" className="w-100" type="text" />
                        <label htmlFor="">قیمت</label>
                        <input defaultValue={item?.price} name="price" className="w-100" type="text" />
                        <input type="file" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        انصراف
                    </Button>
                    <Button variant="outline-danger"
                        onClick={() => handleDelete(item?.category, item?.id)}>
                        حذف این محصول
                    </Button>
                    <Button type="submit" form="form" variant="primary">
                        ذخیره تغییرات
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default DashboardModal;