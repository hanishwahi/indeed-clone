import React from 'react'
import { Col, Row } from 'react-bootstrap'

function JobFeed() {

    const jobs = [
        {
            title: "Web Developer",
            companyName: "infosys",
            location: "delhi",
            salary: "40000",
            type: "full time",
            shift: "Day Shift"
        },
        {
            title: "Backend Developer",
            companyName: "wipro",
            location: "banglore",
            salary: "80000",
            type: "full time",
            shift: "Day Shift"
        },
        {
            title: "Backend Developer",
            companyName: "wipro",
            location: "banglore",
            salary: "80000",
            type: "full time",
            shift: "Day Shift"
        },
        {
            title: "Backend Developer",
            companyName: "wipro",
            location: "banglore",
            salary: "80000",
            type: "full time",
            shift: "Day Shift"
        },
        {
            title: "Backend Developer",
            companyName: "wipro",
            location: "banglore",
            salary: "80000",
            type: "full time",
            shift: "Day Shift"
        }
    ]
    return (
        <>


            {
                jobs.map((item) => {
                    return (
                        <>
                            <div className='jobfeed-inner mb-3'>
                                <Row>
                                    <div className='jobfeed-head'>
                                        <h2>{item.title}</h2>
                                        <div>
                                            <p>{item.companyName} -{item.location}</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className='mt-1 jobfeed-salary'>
                                    <p>Upto {item.salary}</p>
                                    <p>{item.type}</p>
                                    <p>{item.shift}</p>
                                </Row>
                                <Row>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum pariatur itaque non voluptatem natus dolorum numquam vitae earum enim?</span>
                                </Row>
                                <Row className='jobfeed-easy justify-content-between'>
                                    <Col><p>Easily apply</p></Col>
                                    <Col className='text-end'><span>1 hr </span></Col>
                                </Row>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default JobFeed