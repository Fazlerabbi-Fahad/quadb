import React from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';



const Navbar = () => {
    return (
        <div className='bg-color pb-5'>
            <Nav className="justify-content-center pt-2" activeKey="/home">
                <Nav.Item>
                    <Link className='text-decoration-none text-white p-2' to="/home"><h5 className='fw-bold'>QuadB-Explore New Movies</h5></Link>
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-center" activeKey="/home">
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <Button variant="outline-success text-white ">Search</Button>
                </Form>
            </Nav>

        </div>
    );
};

export default Navbar;