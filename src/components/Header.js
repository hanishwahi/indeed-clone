import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo1 from '../Images/logo1.png'
// import logo2 from '../Images/logo2.png'
import { Link } from 'react-router-dom'
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = () => {
        setIsOpen(!isOpen);
    };

    const loggedUser = JSON.parse(localStorage.getItem('loggedin'))
    return (
        <>
            <Container fluid="xxl" className='py-2 border-bottom'>
                <Row className='align-items-center'>
                    <Col lg="8" md="9" sm="9" xs="7">
                        <Link to='/' onClick={() => setIsOpen(false)}> <img src={logo1} alt="" width={100} /></Link>
                        {/* <Link to='/' className='mobileDisNone ms-3'>Home</Link> */}
                    </Col>

                    <Col lg="2" xs="3" md="2" sm="2" className='d-flex justify-content-around align-items-center'>
                        <i class="fa-solid fa-message"></i>
                        <i class="fa-solid fa-bell"></i>
                        <div className='custom-dropdown mobileDisNone'>
                            <i class="fa-solid fa-user" onClick={handleItemClick}></i>
                            {isOpen &&
                                <>
                                    <div className="options">
                                        {
                                            loggedUser ? <Link onClick={handleItemClick}> {loggedUser}</Link> :
                                                <Link to="/login" onClick={handleItemClick}> Login / Signup</Link>
                                        }

                                        <Link to="/profile" onClick={handleItemClick}><i class="fa-solid fa-user-pen"></i> Profile</Link>
                                        <Link to='/saved-jobs' onClick={handleItemClick}><i class="fa-solid fa-bookmark"></i> Jobs</Link>
                                        <Link to='/account-settings' onClick={handleItemClick}><i class="fa-solid fa-gear"></i>Settings</Link>
                                        <Link className='text-center bg-body-secondary' onClick={handleItemClick}>Logout</Link>
                                    </div>
                                </>
                            }
                        </div>

                    </Col>
                    <Col lg="2" className='mobileDisNone header-text'><Link to='/job-post' onClick={() => setIsOpen(false)}>Employers / Post Job </Link></Col>
                    <Col xs="2" sm="1" className='text-end menuBar'><i class="fa-solid fa-bars" style={{ fontSize: "26px" }}></i></Col>
                </Row>
            </Container >
        </>
    )
}

export default Header