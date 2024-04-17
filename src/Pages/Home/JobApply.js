import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function JobApply() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))


    return (
        <>
            <div className="sticky">
                <div className='jobapply-inner'>
                    <Row>
                        <div className='jobapply-head'>
                            <p>New</p>
                            <h2>Web Developer</h2>
                            <div>
                                <p>Company Name</p>
                                <p>Location</p>
                            </div>
                        </div>
                    </Row>
                    <Row className='mt-3 jobapply-salary'>
                        <p>Upto 20000</p>
                        <p>Full-time</p>
                        <p>Day Shift</p>
                    </Row>
                    <Row>
                        <p>Easily apply</p>
                        <p>Posted 1 day ago </p>
                    </Row>
                    {
                        loggedUser ? <Link to="/">Apply Now</Link> : <Link to='/login'>Apply Now</Link>
                    }

                </div>

            </div>
        </>
    )
}

export default JobApply