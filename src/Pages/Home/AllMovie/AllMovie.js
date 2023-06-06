import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './AllMovie.css';

const AllMovie = ({ movie, setShow, setDetails }) => {
    const { name, image, language, genres, status, id } = movie.show;
    return (
        <Card className='col-lg-3 col-sm-1 mt-3' >
            <Card.Img className='img-height'
                variant="top" src={image.original} />
            <Card.Body>
                <Card.Title className='fw-bold'>{name}</Card.Title>

                <p>Language: <span>{language}</span></p>
                <p>Genres: <span>{genres[1] ? genres[1] : genres[0]}</span></p>
                <p>Status: <span>{status}</span></p>

                <Button variant="primary" onClick={() => { setShow(true); setDetails(movie.show) }}>
                    Custom Width Modal
                </Button>
            </Card.Body>
        </Card>
    );
};

export default AllMovie;