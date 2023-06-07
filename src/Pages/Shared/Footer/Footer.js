import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';

const Footer = () => {
    return (
        <footer className="page-footer font-small text-white pt-4 bg-color mt-5">
            <div className="container-fluid text-center text-md-left">
                <div>
                    <div className="mt-md-0 mt-3">
                        <h5 className="text-uppercase fw-bold">QuadB</h5>
                        <p>Here you can watch movies</p>
                    </div>

                    <hr className="clearfix w-100 pb-0" />

                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <Link to="/">QuadB</Link>
            </div>

        </footer>
    );
};

export default Footer; 