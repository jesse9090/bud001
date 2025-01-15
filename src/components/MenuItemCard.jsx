// src/components/MenuItemCard.jsx
import React, { useState, useEffect } from 'react';

function MenuItemCard({ item, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [totalPrice, setTotalPrice] = useState(item.price);

  // Update total price whenever quantity changes
  useEffect(() => {
    const newTotal = item.price * quantity;
    setTotalPrice(newTotal);
  }, [quantity, item.price]);

  const handleAddClick = (e) => {
    e.preventDefault();
    console.log('Adding to cart:', { item, quantity, notes }); // Debug log
    
    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    onAddToCart(item, quantity, notes);
    
    // Reset form after adding to cart
    setQuantity(1);
    setNotes('');
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-red-100 hover:border-red-300 transition-colors">
      <img
        src={item.img}
        alt={item.name}
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h3 className="text-2xl mb-2 text-red-700">
        {item.name} - ${item.price.toFixed(2)}
      </h3>
      <p className="text-gray-700 mb-2">{item.description}</p>
      <p className="text-sm text-gray-600 mb-3">{item.includes}</p>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Quantity:</label>
          <select
            className="border rounded px-2 py-1 w-full"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Special Instructions:</label>
          <textarea
            className="border rounded px-2 py-1 w-full"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="E.g., No onions, extra cheese, etc."
          />
        </div>

        <button
          onClick={handleAddClick}
          className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
        >
          Add to Cart - ${totalPrice.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default MenuItemCard;
