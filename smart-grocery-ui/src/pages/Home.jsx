import React, { useState } from 'react';
import { Search, Zap, Trash2, Star } from 'lucide-react';

export default function Home({ products, cart, setCart }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [quickRows, setQuickRows] = useState([{ id: Date.now(), selectedCategory: '', selectedItem: '', quantity: 1 }]);

    const categories = ["All", "Vegetables", "Fruits", "Dairy"];

    // Filtering logic with safety checks for category objects
    const filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        if (activeCategory === "All") return matchesSearch;
        const pCatName = p.category?.name || p.category || "";
        return matchesSearch && pCatName.toLowerCase() === activeCategory.toLowerCase();
    });

    const addToCart = (product) => {
        setCart([...cart, { ...product, cartId: Date.now() }]);
    };

    const handleBulkAdd = () => {
        const newItems = [];
        quickRows.forEach(row => {
            const p = products.find(item => item.name === row.selectedItem);
            if (p) {
                for (let i = 0; i < (parseInt(row.quantity) || 1); i++) {
                    newItems.push({ ...p, cartId: Math.random() });
                }
            }
        });
        setCart([...cart, ...newItems]);
        setQuickRows([{ id: Date.now(), selectedCategory: '', selectedItem: '', quantity: 1 }]);
        alert("Items added to cart!");
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#f5f7f7', minHeight: '100vh' }}>
            {/* SEARCH BAR SECTION */}
            <div style={{ background: '#232f3e', padding: '15px 0', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', width: '90%', maxWidth: '800px', height: '40px' }}>
                    <input
                        type="text"
                        placeholder="Search for fresh groceries..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ flex: 1, padding: '0 15px', borderRadius: '4px 0 0 4px', border: 'none', outline: 'none' }}
                    />
                    <button style={{ backgroundColor: '#febd69', border: 'none', padding: '0 20px', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>
                        <Search size={20} />
                    </button>
                </div>
            </div>

            <div style={{ padding: '30px 5%' }}>

                {/* LIGHTNING QUICK ADD TOOL */}
                <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
                        <Zap fill="#FF9900" color="#FF9900" size={24} /> Quick Buy List
                    </h2>
                    {quickRows.map((row, index) => (
                        <div key={row.id} style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                            <select
                                value={row.selectedCategory}
                                onChange={(e) => { const u = [...quickRows]; u[index].selectedCategory = e.target.value; setQuickRows(u); }}
                                style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                            >
                                <option value="">Category</option>
                                {categories.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <select
                                disabled={!row.selectedCategory}
                                value={row.selectedItem}
                                onChange={(e) => { const u = [...quickRows]; u[index].selectedItem = e.target.value; setQuickRows(u); }}
                                style={{ flex: 2, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                            >
                                <option value="">Select Item</option>
                                {products
                                    .filter(p => (p.category?.name || p.category || "").toLowerCase() === row.selectedCategory.toLowerCase())
                                    .map(p => <option key={p.id} value={p.name}>{p.name} (₹{p.price})</option>)
                                }
                            </select>
                            <input
                                type="number"
                                min="1"
                                value={row.quantity}
                                onChange={(e) => { const u = [...quickRows]; u[index].quantity = e.target.value; setQuickRows(u); }}
                                style={{ width: '70px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                            <button onClick={() => setQuickRows(quickRows.filter(r => r.id !== row.id))} style={{ color: '#cc0000', border: 'none', background: 'none', cursor: 'pointer' }}><Trash2 /></button>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                        <button onClick={() => setQuickRows([...quickRows, { id: Date.now(), selectedCategory: '', selectedItem: '', quantity: 1 }])} style={{ color: '#007185', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>+ Add Row</button>
                        <button onClick={handleBulkAdd} style={{ backgroundColor: '#ffd814', padding: '10px 30px', borderRadius: '20px', border: '1px solid #fcd200', cursor: 'pointer', fontWeight: 'bold' }}>Add to Cart</button>
                    </div>
                </div>

                {/* CATEGORY TABS */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', overflowX: 'auto', paddingBottom: '10px' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '10px 25px',
                                borderRadius: '20px',
                                backgroundColor: activeCategory === cat ? '#232f3e' : '#fff',
                                color: activeCategory === cat ? '#fff' : '#000',
                                border: '1px solid #ddd',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* PRODUCT GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                    {filteredProducts.map(p => (
                        <div key={p.id} style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e7e7e7', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'default' }}>
                            {/* IMAGE SECTION - Designed for Real Photos */}
                            <div style={{ height: '180px', width: '100%', overflow: 'hidden', backgroundColor: '#eee' }}>
                                <img
                                    src={p.imageUrl}
                                    alt={p.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.src = "";
                                    }}
                                />
                            </div>

                            <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h4 style={{ margin: '0 0 5px 0', color: '#007185', fontSize: '1.1rem' }}>{p.name}</h4>
                                <div style={{ color: '#febd69', display: 'flex', marginBottom: '10px' }}>
                                    <Star size={14} fill="#febd69" /> <Star size={14} fill="#febd69" /> <Star size={14} fill="#febd69" /> <Star size={14} fill="#febd69" />
                                </div>
                                <div style={{ marginTop: 'auto' }}>
                                    <p style={{ fontWeight: 'bold', fontSize: '22px', margin: '0 0 15px 0' }}>
                                        ₹{p.price.toLocaleString('en-IN')}
                                    </p>
                                    <button
                                        onClick={() => addToCart(p)}
                                        style={{ width: '100%', padding: '10px', backgroundColor: '#ffd814', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}
                                        onMouseOver={(e) => e.target.style.backgroundColor = '#f7ca00'}
                                        onMouseOut={(e) => e.target.style.backgroundColor = '#ffd814'}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
                        <h3>No products found in this category.</h3>
                    </div>
                )}
            </div>
        </div>
    );
}