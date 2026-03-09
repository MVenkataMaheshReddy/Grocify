import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';

export default function CartPage({ cart, setCart, products }) {
    const navigate = useNavigate();

    // Group items by ID
    const groupedCart = cart.reduce((acc, item) => {
        const found = acc.find(i => i.id === item.id);
        if (found) found.count += 1;
        else acc.push({ ...item, count: 1 });
        return acc;
    }, []);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleQtyChange = (productId, change) => {
        if (change === 1) {
            const item = products.find(p => p.id === productId);
            setCart([...cart, { ...item, cartId: Date.now() }]);
        } else {
            const index = cart.findIndex(p => p.id === productId);
            if (index !== -1) {
                const newCart = [...cart];
                newCart.splice(index, 1);
                setCart(newCart);
            }
        }
    };

    return (
        <div style={{ padding: '40px 5%', display: 'flex', gap: '30px' }}>
            <div style={{ flex: 3, backgroundColor: 'white', padding: '25px', borderRadius: '8px' }}>
                <h1 style={{ borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>Shopping Cart</h1>
                {groupedCart.length === 0 ? <p>Your cart is empty.</p> : groupedCart.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid #eee', alignItems: 'center' }}>
                        <img src={item.imageUrl} style={{ width: '80px' }} alt={item.name} />
                        <div style={{ flex: 1 }}>
                            <h3 style={{ color: '#007185', margin: 0 }}>{item.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px' }}>
                                    <button onClick={() => handleQtyChange(item.id, -1)} style={{ padding: '5px 10px', border: 'none', background: '#f0f2f2', cursor: 'pointer' }}><Minus size={14} /></button>
                                    <span style={{ padding: '0 15px', fontWeight: 'bold' }}>{item.count}</span>
                                    <button onClick={() => handleQtyChange(item.id, 1)} style={{ padding: '5px 10px', border: 'none', background: '#f0f2f2', cursor: 'pointer' }}><Plus size={14} /></button>
                                </div>
                                <button onClick={() => setCart(cart.filter(c => c.id !== item.id))} style={{ color: '#007185', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px' }}>Delete</button>
                            </div>
                        </div>
                        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>₹{(item.price * item.count).toLocaleString('en-IN')}</div>
                    </div>
                ))}
            </div>

            <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
                <h3 style={{ margin: 0 }}>Subtotal ({cart.length} items):</h3>
                <h2 style={{ margin: '10px 0 20px 0' }}>₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
                <button
                    onClick={() => navigate('/success')}
                    style={{ width: '100%', backgroundColor: '#ffd814', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                >
                    Proceed to Buy
                </button>
            </div>
        </div>
    );
}