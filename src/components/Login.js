import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Login({ show, handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="login-container">
                        <form onSubmit={handleSubmit} className="login-form">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Login</button>
                            <Link to='/signup'>Don't have account? signup</Link>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Login