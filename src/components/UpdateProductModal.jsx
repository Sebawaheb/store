import { Button, Modal } from "react-bootstrap";
function UpdateProductModal({ show, onHide, requestRender, productId }) {
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
                        Update Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateProductModal;