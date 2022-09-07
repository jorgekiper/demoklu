import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import iconKluLogo from '../../assets/images/icons/loader/loader-klu.svg';

export const LoaderFuncional = ({show=false}) => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <div className='container-fluid'>
                <Modal show={show} onHide={show} className="modal fade modal_loader">
                    <Modal.Body className="modal_loader modal-dialog modal-dialog-centered d-flex justify-content-center">
                        <img src={iconKluLogo} className="loader__size" />
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}