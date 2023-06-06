import React from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <Nav className="justify-content-center pt-2" activeKey="/home">
            <Nav.Item>
                <Link className='text-decoration-none text-white p-3' to="/home">Home</Link>
            </Nav.Item>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Nav>
    );
};

export default Navbar;