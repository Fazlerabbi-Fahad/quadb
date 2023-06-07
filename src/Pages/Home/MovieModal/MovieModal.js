import React from 'react';
import { Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../AllMovie/AllMovie.css'

const MovieModal = ({ details, show, setShow }) => {
    const summary = `${details.summary}`;
    return (
        <div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title fw-bold">
                        {details.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Body>
                        <p><span className='fw-bold'>Summary: </span><span dangerouslySetInnerHTML={{ __html: summary }}></span></p>
                        <p><span className='fw-bold'>Language:</span> <span>{details.language}</span></p>
                        <p><span className='fw-bold'>Status:  </span><span>{details.status}</span></p>

                        <Link className='btn btn-details text-decoration-none text-white p-10' variant="primary" to={`/movie/${details.id}`}>
                            Book a Ticket
                        </Link>
                    </Card.Body>
                </Modal.Body>
            </Modal >
        </div >
    );
};

export default MovieModal;