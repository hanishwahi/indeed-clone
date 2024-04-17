import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './../Images/logo1.png'

function Footer() {
    return (
        <>
            <div className="footer">
                <Container fluid="xxl" className='py-2'>
                    <Row className='align-items-center justify-content-between'>
                        <Col lg="9" md="6" sm="6" xs="5">
                            <img src={logo} alt="" width={100} />
                        </Col>
                        <Col lg="1" md="3" sm="3" xs="2" className="text-end"><Link>Terms</Link></Col>
                        <Col lg="2" md="3" sm="3" xs="5"><Link>Privacy Centre</Link></Col>
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default Footer