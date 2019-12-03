import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

interface IPopup {
    title?: string,
    showPopup: boolean,
    onClose(): any
    onEdit(): any
}

const Popup: React.FC<IPopup> = (props) => {

    const [show, setShow] = useState(props.showPopup);

    const handleClose = () => props.onClose();
    const handleEdit = () => props.onEdit();

    useEffect(() => {
        setShow(props.showPopup)
    }, [props.showPopup])

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;