import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from '@/components/EnquiryForm/EnquiryForm.module.scss'


export default function CoonectModal(props: any) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Connect with Us
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <div className={style.inputs}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <input type='text' placeholder='Your Name' className={`${style.control} form-control`} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                            <input type='text' placeholder='Company Name' className={`${style.control} form-control`} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                            <input type='email' placeholder='Email Address' className={`${style.control} form-control`} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                            <input type='text' placeholder='Phone Number' className={`${style.control} form-control`} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                            <textarea placeholder='Write Your Message' className={`${style.control} form-control`} rows={4} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>

                <Button onClick={props.onHide} style={{ width: "100%", color: "#fff", backgroundColor: "#2e5490" }}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}