import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Success({ setCart }) {
    // Clear the cart once the order is "placed"
    useEffect(() => {
        setCart([]);
    }, [setCart]);

    const orderId = Math.floor(Math.random() * 900000) + 100000;

    return (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <CheckCircle size={80} color="green" style={{ marginBottom: '20px' }} />
            <h1 style={{ color: '#111', fontSize: '32px' }}>Thank you for your purchase!</h1>
            <p style={{ fontSize: '18px', color: '#555' }}>
                Your order <b>#SG-{orderId}</b> has been placed successfully.
            </p>
            <div style={{ marginTop: '30px' }}>
                <Link to="/" style={{
                    backgroundColor: '#ffd814',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    color: '#111',
                    fontWeight: 'bold',
                    border: '1px solid #fcd200'
                }}>
                    Return to Store
                </Link>
            </div>
        </div>
    );
}