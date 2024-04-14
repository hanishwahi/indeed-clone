import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function JobFeed() {
    return (
        <>
            <div className="border-bottom job-feed">
                <h3>Job Feed</h3>
            </div>
            <Container>
                <Row className='py-3'>
                    <Col>
                        <div className='jobfeed-inner'>
                            <Row><p>New</p></Row>
                            <Row><h2>Web Developer</h2></Row>
                            <Row><p>Company Name</p></Row>
                            <Row><p>Location</p></Row>
                            <Row>
                                <Col>Upto 20000</Col>
                                <Col>Full-time</Col>
                                <Col>Day Shift</Col>
                            </Row>
                            <Row>
                                <p>Easily apply</p>
                                <p>Posted 1 day ago </p>
                            </Row>

                        </div>
                    </Col>
                    <Col>
                        <div className='jobfeed-inner'>
                            <Row><p>New</p></Row>
                            <Row><h2>Web Developer</h2></Row>
                            <Row><p>Company Name</p></Row>
                            <Row><p>Location</p></Row>
                            <Row>
                                <Col>Upto 20000</Col>
                                <Col>Full-time</Col>
                                <Col>Day Shift</Col>
                            </Row>
                            <Row>
                                <p>Easily apply</p>
                                <p>Posted 1 day ago </p>
                            </Row>

                        </div>
                    </Col>
                </Row >
            </Container>


        </>
    )
}

export default JobFeed