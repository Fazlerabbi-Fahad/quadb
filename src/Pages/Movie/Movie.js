import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../Home/AllMovie/AllMovie.css'

const Movie = () => {
    const movie = useLoaderData();
    const [validated, setValidated] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const storedUserDetails = localStorage.getItem('userDetails');
        if (storedUserDetails) {
            setUserDetails(JSON.parse(storedUserDetails));
        }
    }, []);

    useEffect(() => {
        if (userDetails) {
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
        }
    }, [userDetails]);



    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const movieName = form.movieName.value;
        const person = form.person.value;
        const state = form.state.value;
        const price = form.state.value;
        console.log(firstName, lastName, movieName, person, state, price);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='mt-5 t'>
            <h1 className='fw-bold mb-4'>Book {movie.name} Movie Tickets</h1>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        name="firstName"
                        type="text"
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Movie</Form.Label>
                    <Form.Control
                        disabled
                        name="movieName"
                        type="text"
                        defaultValue={movie.name}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Number of People</Form.Label>
                    <Form.Select name='person'>
                        <option name="1">1</option>
                        <option name="2">2</option>
                        <option name="3">3</option>
                        <option name="4">4</option>
                        <option name="5">5</option>
                        <option name="6">6</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" name="state" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" disabled defaultValue="$250" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button className='btn-details' type="submit">Book Ticket</Button>
        </Form>
    );
};

export default Movie;