import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Switch between login and register endpoints
        const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';

        try {
            // Backend is on 8080, Frontend is on 5174
            const res = await axios.post(`http://localhost:8080${endpoint}`, {
                username: username,
                password: password
            });

            if (res.status === 200) {
                if (!isRegistering) {
                    // Login Success
                    setUser(res.data); // This pushes the username up to App.jsx
                    navigate('/');     // Go back to home
                } else {
                    // Registration Success
                    alert("Account created! Please sign in now.");
                    setIsRegistering(false); // Switch to login view
                    setUsername("");
                    setPassword("");
                }
            }
        } catch (err) {
            console.error("Auth Error:", err);
            alert(err.response?.data || "Connection failed. Check if Backend is running.");
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px' }}>
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                width: '350px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
                <h1 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '400' }}>
                    {isRegistering ? "Create Account" : "Sign-In"}
                </h1>

                <form onSubmit={handleSubmit}>
                    <label style={{ fontWeight: 'bold', fontSize: '13px', display: 'block', marginBottom: '5px' }}>Username</label>
                    <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width: '100%', padding: '10px', marginBottom: '15px',
                            border: '1px solid #a6a6a6', borderRadius: '3px',
                            boxSizing: 'border-box'
                        }}
                    />

                    <label style={{ fontWeight: 'bold', fontSize: '13px', display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: '100%', padding: '10px', marginBottom: '20px',
                            border: '1px solid #a6a6a6', borderRadius: '3px',
                            boxSizing: 'border-box'
                        }}
                    />

                    <button type="submit" style={{
                        width: '100%', backgroundColor: '#ffd814',
                        border: '1px solid #fcd200', padding: '10px',
                        borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'
                    }}>
                        {isRegistering ? "Register" : "Sign In"}
                    </button>
                </form>

                <div style={{ marginTop: '20px', fontSize: '12px', textAlign: 'center', color: '#555' }}>
                    {isRegistering ? "Already have an account?" : "New to SmartGrocery?"}
                    <button
                        onClick={() => setIsRegistering(!isRegistering)}
                        style={{
                            background: 'none', border: 'none', color: '#007185',
                            cursor: 'pointer', textDecoration: 'underline', marginLeft: '5px'
                        }}
                    >
                        {isRegistering ? "Sign-In" : "Create your account"}
                    </button>
                </div>
            </div>
        </div>
    );
}