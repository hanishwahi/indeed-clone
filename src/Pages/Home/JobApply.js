import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Login from '../../components/Login';

function JobApply() {
    const [show, setShow] = useState(false);
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
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
                {
                    loggedUser ? <Link>Apply Now</Link> :
                        <Button variant="primary" onClick={handleShow}>
                            Apply Now
                        </Button>
                }

            </div>
            {
                show && <Login show={show} handleClose={handleClose} />
            }
        </>
    )
}

export default JobApply