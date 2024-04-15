import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import JobApply from './JobApply'

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
                            <Row>
                                <div className='jobfeed-head'>
                                    <p>New</p>
                                    <h2>Web Developer</h2>
                                    <div>
                                        <p>Company Name</p>
                                        <p>Location</p>
                                    </div>
                                </div>
                            </Row>
                            <Row className='mt-3 jobfeed-salary'>
                                <p>Upto 20000</p>
                                <p>Full-time</p>
                                <p>Day Shift</p>
                            </Row>
                            <Row>
                                <p>Easily apply</p>
                                <p>Posted 1 day ago </p>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <JobApply />
                    </Col>
                </Row >
            </Container>


        </>
    )
}

export default JobFeed