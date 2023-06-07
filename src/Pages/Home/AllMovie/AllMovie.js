import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './AllMovie.css';

const AllMovie = ({ movie, setShow, setDetails }) => {
    const { name, image, language, genres, status } = movie.show;
    return (
        <div className='col-lg-3 col-md-6 col-sm-1 mt-3'>
            <Card  >
                <div className='card-width'>
                    <Card.Img className='img-height'
                        variant="top" src={image.original} />
                    <Card.Body>
                        <Card.Title className='fw-bold'>{name}</Card.Title>

                        <p><span className='fw-semibold'>Language:</span> <span>{language}</span></p>
                        <p><span className='fw-semibold'>Genres: </span><span>{genres[1] ? genres[1] : genres[0]}</span></p>
                        <p><span className='fw-semibold'>Status: </span><span>{status}</span></p>

                        <Button className='btn-details' variant="primary" onClick={() => { setShow(true); setDetails(movie.show) }}>
                            Details
                        </Button>
                    </Card.Body>
                </div>

            </Card >
        </div >
    );
};

export default AllMovie;