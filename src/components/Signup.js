import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [aadharCard, setAadharCard] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="number" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required />
                <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
                <input type="number" placeholder="Aadhar number" value={aadharCard} onChange={e => setAadharCard(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                <button type="submit">Signup</button>
                <Link to="/signup">Already have account? signup</Link>
            </form>
        </div>
    );
}

export default Signup;
