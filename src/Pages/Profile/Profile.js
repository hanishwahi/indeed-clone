import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Profile() {
    return (
        <>
            <div className='profile-main'>
                <Container >
                    <Row className=' justify-content-center align-items-center profile-inner'>
                        <Col xs="8"><h1>Hanish Wahi</h1></Col>
                        <Col xs="4" className='text-end'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHu3kWMCRGViaqSq2WV2evp9SpMthOk6m_ggT_CuZ3g&s" alt="" /></Col>
                    </Row>
                    <Row className='profile-inner'>
                        <div className='d-flex align-items-center'><i class="fa-solid fa-envelope"></i> <p>hanishwahi@gmail.com</p></div>
                        <div className='d-flex align-items-center'><i class="fa-solid fa-phone"></i><p>9034130130</p></div>
                        <div className='d-flex align-items-center'><i class="fa-solid fa-location-dot"></i><p>Mohali Punjab</p></div>
                    </Row>
                    <hr />
                    <Row className='profile-inner'>
                        <h3>Qualification</h3>
                        <p>10th from Abc public School</p>
                        <p>BCA from xyz University</p>
                    </Row>
                    <hr />
                    <Row className='profile-inner'>
                        <h3>Portfolio</h3>
                        <a href="" target='_blank'>abcsdhsdjhdshjhdsj.com</a>
                    </Row>

                </Container>
            </div>

        </>
    )
}

export default Profile