import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
                    />
                    <button type="submit">Login</button>
                    <Link to='/signup'>Don't have account? signup</Link>
                </form>
            </div>
        </>
    )
}
export default Login