import React from 'react'
import JobApply from './JobApply'
import JobFeed from './JobFeed'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer'

function JobFeedTab() {
    return (
        <>
            <div className="border-bottom job-feed">
                <h3>Job Feed</h3>
            </div>

            <Container>
                <Row>
                    <Col lg="5">
                        <JobFeed />
                    </Col>
                    <Col lg="7" className="mobileDisNone">
                        <JobApply />
                    </Col>
                </Row>

            </Container>
            <Footer />

        </>
    )
}

export default JobFeedTab