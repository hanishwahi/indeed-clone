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
                    <Col lg="2">
                        <img src={logo1} alt="" width={130} />
                        <img src={logo2} alt="" width={50} />
                    </Col>
                    <Col lg="6">
                        <Link to='/'>Home</Link>
                    </Col>
                    <Col lg="2" className='d-flex justify-content-around'>
                        <i class="fa-solid fa-message"></i>
                        <i class="fa-solid fa-bell"></i>
                        <div className='custom-dropdown'>
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
                    <Col lg="2"><Link>Employers / Post Job </Link></Col>
                </Row>
            </Container>
        </>
    )
}

export default Header