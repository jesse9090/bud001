// src/components/InteractiveMenu.jsx
import React, { useState } from 'react';
import MenuItemCard from './MenuItemCard.jsx';
import CartSidebar from './CartSidebar.jsx';

function InteractiveMenu() {
  const [menuItems] = useState([
    {
      id: 1,
      name: 'Two Eggs Any Style',
      price: 8.99,
      description: 'Two farm-fresh eggs cooked your way',
      includes: 'Served with home fries and toast',
      img: 'https://images.unsplash.com/photo-1606851682837-019baf2e8da4?w=800&q=80',
    },
    {
      id: 2,
      name: 'Bacon and Eggs',
      price: 10.99,
      description: 'Crispy bacon with two eggs any style',
      includes: 'Served with home fries and toast',
      img: 'https://images.unsplash.com/photo-1600336153113-d66c79de3e91?w=800&q=80',
    },
    // Add more menu items as needed
  ]);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item, quantity, notes) => {
    console.log('handleAddToCart called:', { item, quantity, notes }); // Debug log
    
    const qty = Number(quantity);
    if (qty < 1) return;

    setCart(prevCart => {
      // Find if item with same notes already exists
      const existingItemIndex = prevCart.findIndex(
        cartItem => cartItem.id === item.id && cartItem.notes === notes
      );

      if (existingItemIndex !== -1) {
        // Update existing item quantity
        const newCart = [...prevCart];
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + qty
        };
        return newCart;
      } else {
        // Add new item
        return [...prevCart, {
          ...item,
          quantity: qty,
          notes,
          cartId: `${item.id}-${Date.now()}`
        }];
      }
    });

    setIsCartOpen(true);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <h1 className="text-5xl text-center mb-12 text-red-700">Our Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map((item) => (
          <MenuItemCard 
            key={item.id} 
            item={item} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <button
        className="fixed bottom-4 right-4 bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-700 transition-colors z-50"
        onClick={() => setIsCartOpen(true)}
      >
        View Cart ({totalItems} items)
      </button>

      {isCartOpen && (
        <CartSidebar 
          cartItems={cart} 
          onClose={() => setIsCartOpen(false)} 
        />
      )}
    </div>
  );
}

export default InteractiveMenu;
