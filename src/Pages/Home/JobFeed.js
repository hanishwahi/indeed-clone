import React from 'react'
import { Row } from 'react-bootstrap'

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
                                        <p>New</p>
                                        <h2>{item.title}</h2>
                                        <div>
                                            <p>{item.companyName}</p>
                                            <p>{item.location}</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className='mt-3 jobfeed-salary'>
                                    <p>Upto {item.salary}</p>
                                    <p>{item.type}</p>
                                    <p>{item.shift}</p>
                                </Row>
                                <Row>
                                    <p>Easily apply</p>
                                    <p>Posted 1 day ago </p>
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