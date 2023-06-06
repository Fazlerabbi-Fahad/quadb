import React, { createElement } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieModal = ({ details, show, setShow }) => {

    return (
        <div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {details.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <Card.Img className='img-height'
                        variant="top" src={details?.image.original} /> */}
                    <Card.Body>
                        <p>Summary: <span>{details.summary}</span></p>
                        <p>Language: <span>{details.language}</span></p>
                        {/* <p>Genres: <span>{details.genres[1] ? details.genres[1] : details.genres[0]}</span></p> */}
                        <p>Status: <span>{details.status}</span></p>
                        {/* <p>Ratings: <span>{details.rating.average ? details.rating.average : 'Not Rated'}</span></p> */}


                        <Link className='btn btn-primary' to={`/movie/${details.id}`}></Link>
                    </Card.Body>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MovieModal;