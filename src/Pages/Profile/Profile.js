import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Profile() {
    return (
        <>
            <div>
                <Container className='w-50 border'>
                    <Row className=' justify-content-center align-items-center'>
                        <Col><h1>Hanish Wahi</h1></Col>
                        <Col className='text-end'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHu3kWMCRGViaqSq2WV2evp9SpMthOk6m_ggT_CuZ3g&s" alt="" width={50} /></Col>
                    </Row>
                    <Row>
                        <div><p>hanishwahi@gmail.com</p></div>
                        <div><p>9034130130</p></div>
                        <div><p>Mohali Punjab</p></div>
                    </Row>

                </Container>
            </div>

        </>
    )
}

export default Profile