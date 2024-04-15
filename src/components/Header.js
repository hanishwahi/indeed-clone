import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo1 from '../Images/logo1.png'
import logo2 from '../Images/logo2.png'
import { Link } from 'react-router-dom'
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (item) => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Container fluid="xxl" className='py-2 border-bottom'>
                <Row className='align-items-center'>
                    <Col lg="3" md="9" sm="9" xs="7">
                        <img src={logo1} alt="" width={130} />
                        <img src={logo2} alt="" width={50} />
                    </Col>
                    <Col lg="5" className='mobileDisNone'>
                        <Link to='/'>Home</Link>
                    </Col>
                    <Col lg="2" xs="3" md="2" sm="2" className='d-flex justify-content-around'>
                        <i class="fa-solid fa-message"></i>
                        <i class="fa-solid fa-bell"></i>
                        <div className='custom-dropdown mobileDisNone'>
                            <i class="fa-solid fa-user" onClick={handleItemClick}></i>
                            {isOpen &&
                                <>
                                    <div className="options">
                                        <Link><i class="fa-solid fa-file"></i> Profile</Link>
                                        <Link><i class="fa-solid fa-bookmark"></i> Jobs</Link>
                                        <Link><i class="fa-solid fa-gear"></i>Settings</Link>
                                    </div>
                                </>
                            }
                        </div>

                    </Col>
                    <Col lg="2" className='mobileDisNone'><Link>Employers / Post Job </Link></Col>
                    <Col xs="2" sm="1" className='text-end menuBar'><i class="fa-solid fa-bars" style={{ fontSize: "26px" }}></i></Col>
                </Row>
            </Container>
        </>
    )
}

export default Header