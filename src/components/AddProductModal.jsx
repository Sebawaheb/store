import { Button, Modal } from "react-bootstrap";
import AddProduct from "./AddProduct";
function AddProductModal({ show, onHide, requestRender }) {
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProduct onHide={onHide} requestRender={requestRender} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default AddProductModal;