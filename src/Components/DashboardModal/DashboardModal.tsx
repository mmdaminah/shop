import React from 'react'
import { Button, Modal } from 'react-bootstrap';

const DashboardModal = (props: any) => {
    const handleClose = () => props.setShow(false);
    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form  
                className="d-flex flex-column" action="">
                    <label htmlFor="">دسته</label>
                    <input defaultValue={props.item.category} name="category" className="w-100" type="text" />
                    <label htmlFor="">برند</label>
                    <input defaultValue={props.item.brand} name="brand" className="w-100" type="text" />
                    <label htmlFor="">مدل</label>
                    <input defaultValue={props.item.model} name="model" className="w-100" type="text" />
                    <label htmlFor="">قیمت</label>
                    <input defaultValue={props.item.price} name="price" className="w-100" type="text" />
                    <input type="file" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    انصراف
                </Button>
                <Button variant="outline-danger" onClick={handleClose}>
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