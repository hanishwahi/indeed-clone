import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
function JobFeed() {
    const jobs = [
        {
            id: 1,
            title: "Web Developer",
            companyName: "infosys",
            location: "delhi",
            salary: "40000",
            type: "full time",
            shift: "Day Shift"
        },
        {
            id: 2,
            title: "Backend Developer",
            companyName: "wipro",
            location: "banglore",
            salary: "80000",
            type: "full time",
            shift: "Day Shift"
        },
        {
            id: 3,
            title: "Digital marketing",
            companyName: "seo disovery",
            location: "mohali",
            salary: "30000",
            type: "full time",
            shift: "night Shift"
        },
        {
            id: 4,
            title: "python developer",
            companyName: "tcs",
            location: "noida",
            salary: "50000",
            type: "full time",
            shift: "Day Shift"
        },
        {
            id: 5,
            title: "java Developer",
            companyName: "amazon",
            location: "hyderabad",
            salary: "60000",
            type: "full time",
            shift: "Day Shift"
        }
    ]

    let [searchParams, setSearchParams] = useSearchParams();
    let jobtitle = searchParams.get('q')
    let cityName = searchParams.get('l')

    const handleJobView = (id) => {
        jobtitle ? setSearchParams({ q: jobtitle, l: cityName, jpi: id }) :
            setSearchParams({ jpi: id })
    }

    return (
        <>
            {
                jobs.map((item) => {
                    return (
                        <>
                            <div onClick={() => handleJobView(item.id)} className='jobfeed-inner mb-3'>
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
                            </div >
                        </>
                    )
                })
            }
        </>
    )
}
export default JobFeed