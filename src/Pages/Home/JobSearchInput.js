import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function JobSearchInput() {
    const [jobTitle, setJobTitle] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform your search operation
        console.log('Searching for job with title:', jobTitle, 'in city:', city);
    };

    return (
        <>
            <div className="container1">
                <form onSubmit={handleSubmit}>
                    <Row>
                        <div className="input-group">
                            <Col lg="5" md="5" sm="5" xs="12" className='input-group-inner'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input
                                    type="text"
                                    placeholder="Job title"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    className='border-right'
                                />
                            </Col>
                            <Col lg="5" md="5" sm="5" xs="12" className='input-group-inner'>
                                <i class="fa-solid fa-location-dot"></i>
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Col>
                            <Col lg="2" md="2" sm="2" xs="12" className='p-0'>
                                <button type="submit">Find Job</button>
                            </Col>

                        </div>
                    </Row>

                </form>
            </div >
        </>
    )
}

export default JobSearchInput