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
                            <div className="d-flex justify-content-between align-items-center">
                                <h2>Web Developer</h2>
                                {
                                    loggedUser ? <Link to="/">Apply Now</Link> : <Link to='/login'>Apply Now</Link>
                                }
                            </div>
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
                        <div style={{ height: "21rem", overflowY: "scroll" }}>
                            <span >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe amet eos doloremque ex provident nobis nihil est perferendis vero eum cumque dolore, nulla fuga fugiat accusantium, in aliquam consequuntur! Voluptas, deleniti aspernatur temporibus, non perferendis blanditiis aperiam est quod totam tempora consectetur quibusdam, quae amet adipisci ipsum a laudantium? Temporibus voluptatibus nam sunt cupiditate aliquam assumenda praesentium deserunt adipisci distinctio! Fugit sed explicabo, quaerat animi temporibus ut ea consectetur odit tempore repellendus, dolor, dolore iusto veritatis modi quasi rerum inventore facere excepturi cum ab. Possimus minima quasi inventore alias quia eligendi quibusdam itaque consequatur corporis esse reprehenderit at neque illo, a magnam harum officiis excepturi corrupti, aliquid deleniti facilis atque ratione. Reprehenderit laudantium quia assumenda ipsam molestias eius, impedit soluta magni delectus illum rerum eligendi expedita! Mollitia nulla fugiat, pariatur, enim id ipsam ab at numquam, ratione ex consectetur. Ab quibusdam reiciendis odio numquam, voluptates sunt soluta sequi nemo, voluptatum quia nostrum quos nesciunt et repudiandae rem quam eveniet quis officia quae vitae omnis accusantium? Iste modi earum repudiandae quod ut laboriosam amet ducimus ipsam dolores praesentium repellendus quaerat ad fuga quibusdam delectus odit, possimus dicta corrupti asperiores dolorem quis. Dolor aliquid voluptatibus adipisci, nulla perspiciatis ut aperiam aspernatur!
                            </span> <br /> <br />
                            <span >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe amet eos doloremque ex provident nobis nihil est perferendis vero eum cumque dolore, nulla fuga fugiat accusantium, in aliquam consequuntur! Voluptas, deleniti aspernatur temporibus, non perferendis blanditiis aperiam est quod totam tempora consectetur quibusdam, quae amet adipisci ipsum a laudantium? Temporibus voluptatibus nam sunt cupiditate aliquam assumenda praesentium deserunt adipisci distinctio! Fugit sed explicabo, quaerat animi temporibus ut ea consectetur odit tempore repellendus, dolor, dolore iusto veritatis modi quasi rerum inventore facere excepturi cum ab. Possimus minima quasi inventore alias quia eligendi quibusdam itaque consequatur corporis esse reprehenderit at neque illo, a magnam harum officiis excepturi corrupti, aliquid deleniti facilis atque ratione. Reprehenderit laudantium quia assumenda ipsam molestias eius, impedit soluta magni delectus illum rerum eligendi expedita! Mollitia nulla fugiat, pariatur, enim id ipsam ab at numquam, ratione ex consectetur. Ab quibusdam reiciendis odio numquam, voluptates sunt soluta sequi nemo, voluptatum quia nostrum quos nesciunt et repudiandae rem quam eveniet quis officia quae vitae omnis accusantium? Iste modi earum repudiandae quod ut laboriosam amet ducimus ipsam dolores praesentium repellendus quaerat ad fuga quibusdam delectus odit, possimus dicta corrupti asperiores dolorem quis. Dolor aliquid voluptatibus adipisci, nulla perspiciatis ut aperiam aspernatur!
                            </span>
                        </div>

                    </Row>
                </div>

            </div >
        </>
    )
}

export default JobApply