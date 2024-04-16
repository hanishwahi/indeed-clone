import React from 'react'
import JobApply from './JobApply'
import JobFeed from './JobFeed'
import { Col, Container, Row } from 'react-bootstrap'

function JobFeedTab() {
    return (
        <>
            <div className="border-bottom job-feed">
                <h3>Job Feed</h3>
            </div>
            <Container>
                <Row>
                    <Col>
                        <JobFeed />
                    </Col>
                    <Col className="mobileDisNone">
                        <JobApply />
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default JobFeedTab