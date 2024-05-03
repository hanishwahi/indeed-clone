import React from 'react'
import { Row } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom'

function JobApply() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    let [searchParams, setSearchParams] = useSearchParams();
    let selectedJob = searchParams.get('jpi') ? searchParams.get('jpi') : 1
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

    let FilteredSelectedJob = jobs.filter((item) => item.id == selectedJob)

    return (
        <>
            <div className="sticky">
                <div className='jobapply-inner'>
                    {FilteredSelectedJob && FilteredSelectedJob.map((item) => {
                        return (
                            <>
                                <Row>
                                    <div className='jobapply-head'>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h2>{item.title}</h2>
                                            {
                                                loggedUser ? <Link to="/">Apply Now</Link> : <Link to='/login'>Apply Now</Link>
                                            }
                                        </div>
                                        <div>
                                            <p>{item.companyName}</p>
                                            <p>{item.location}</p>
                                        </div>
                                    </div>
                                </Row>
                                <Row className='my-3 jobapply-salary border-bottom'>
                                    <p>Upto {item.salary}</p>
                                    <p>{item.type}</p>
                                    <p>{item.shift}</p>
                                </Row>


                                <Row>
                                    <div style={{ height: "21rem", overflowY: "scroll" }}>
                                        <h4><strong>Full job description</strong></h4>
                                        <div>
                                            <p>Job Description:</p>
                                            <span >
                                                {item.description}
                                            </span>
                                        </div>
                                        <div>
                                            <p>Responsibilities:</p>
                                            <ul>
                                                <li>Developing new user-facing features using React.js</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>Skills:</p>
                                            <ul>
                                                <li>Developing new user-facing features using React.js</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>Benefits:</p>
                                            <ul>
                                                <li>Paid sick time</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>Schedule:</p>
                                            <ul>
                                                <li>Monday to Friday</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>Education:</p>
                                            <ul>
                                                <li>Bachelor's (Preferred)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p>Experience:</p>
                                            <ul>
                                                <li>total work: 1 year (Preferred)</li>
                                            </ul>
                                        </div>
                                        {
                                            loggedUser ?
                                                <div className='my-3 text-end'><Link to="/">Apply Now</Link></div> :
                                                <div className='my-3 text-end'> <Link to='/login'>Apply Now</Link></div>

                                        }
                                    </div>

                                </Row>
                            </>
                        )
                    })
                    }

                </div>

            </div >
        </>
    )
}

export default JobApply