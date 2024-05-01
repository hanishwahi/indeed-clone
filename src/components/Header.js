import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../Images/logo1.png';

function Header() {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const handleItemClick = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const loggedUser = JSON.parse(localStorage.getItem('loggedin'));

    return (
        <Container fluid="xxl" className='py-2 border-bottom'>
            <Row className='align-items-center'>
                <Col lg="8" md="9" sm="9" xs="7">
                    <Link to='/' onClick={() => setIsProfileMenuOpen(false)}>
                        <img src={logo1} alt="" width={100} />
                    </Link>
                </Col>
                <Col lg="2" xs="3" md="2" sm="2" className='d-flex justify-content-around align-items-center'>
                    <i className="fa-solid fa-message"></i>
                    <i className="fa-solid fa-bell"></i>
                    <div className='custom-dropdown mobileDisNone'>
                        <i className="fa-solid fa-user" onClick={handleItemClick}></i>
                        {isProfileMenuOpen && (
                            <div className="options">
                                {loggedUser ? (
                                    <Link onClick={handleItemClick}>{loggedUser}</Link>
                                ) : (
                                    <Link to="/login" onClick={handleItemClick}>Login / Signup</Link>
                                )}
                                <Link to="/profile"><i className="fa-solid fa-user-pen"></i> Profile</Link>
                                <Link to='/saved-jobs' onClick={handleItemClick}><i className="fa-solid fa-bookmark"></i> Jobs</Link>
                                <Link to='/account-settings' onClick={handleItemClick}><i className="fa-solid fa-gear"></i> Settings</Link>
                                <Link className='text-center bg-body-secondary' onClick={handleItemClick}>Logout</Link>
                            </div>
                        )}
                    </div>
                </Col>
                <Col lg="2" className='mobileDisNone header-text'>
                    <Link to='/job-post' onClick={() => setIsProfileMenuOpen(false)}>Employers / Post Job</Link>
                </Col>
                <Col className='menuBar'><i className="fa-solid fa-bars" style={{ fontSize: "26px" }}></i></Col>
            </Row>
        </Container>
    );
}

export default Header;
