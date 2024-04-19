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
                                <p>Infosys</p>
                                <p>delhi</p>
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad dicta aperiam qui nisi eligendi, deleniti, cum dolorem ipsum, sequi culpa quaerat voluptate reiciendis excepturi libero suscipit? Pariatur assumenda enim ab nemo vel quos sunt saepe fuga numquam perferendis atque dolor maiores mollitia, inventore natus ipsum ducimus et itaque? Expedita voluptatum ad, facilis obcaecati quibusdam necessitatibus ipsam nam. Esse libero autem deserunt explicabo, fugit distinctio natus soluta ab, cum sapiente doloremque aliquam accusamus voluptatibus eveniet architecto ipsa temporibus provident excepturi, nisi debitis asperiores optio quia aliquid. Est a distinctio ex ducimus rem. Blanditiis voluptatem numquam reiciendis quidem asperiores corporis suscipit. Architecto autem voluptate, iusto maiores magnam aliquam? Architecto nemo quaerat incidunt? Fugiat, nesciunt! Ipsum, tenetur exercitationem! Veniam eveniet numquam, hic nihil, quidem labore quasi perferendis repellat maiores quam aliquam alias nulla nemo ducimus, nesciunt odio tempore exercitationem inventore neque necessitatibus! Neque eaque modi, aliquid non, corporis officiis et dolor laborum soluta beatae, deleniti veniam quod inventore blanditiis eos molestias reprehenderit exercitationem aut ratione debitis aspernatur! Alias corrupti unde molestias provident perspiciatis delectus quod, voluptatem consectetur excepturi repellendus iure voluptates blanditiis ipsam eos tenetur doloremque ipsum? Molestiae repellat dolore aliquam ab maxime expedita! Blanditiis, minima officia! Nihil at officiis necessitatibus enim?
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