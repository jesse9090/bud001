// src/components/CartSidebar.jsx
import React from 'react';

function CartSidebar({ cartItems, onClose }) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity),
    0
  );

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-6 z-50 overflow-y-auto border-l border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-red-700">Your Receipt</h2>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-gray-700 text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="border-b-2 border-gray-200 mb-4">
            <div className="grid grid-cols-4 gap-2 text-sm font-bold text-gray-600 mb-2">
              <div className="col-span-2">Item</div>
              <div className="text-right">Qty</div>
              <div className="text-right">Price</div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.cartId} className="border-b border-gray-100 pb-4">
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <div className="col-span-2">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.includes}</p>
                  </div>
                  <div className="text-right">{item.quantity}</div>
                  <div className="text-right">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                {item.notes && (
                  <p className="text-xs text-gray-500 mt-1">Notes: {item.notes}</p>
                )}
              </div>
            ))}
          </div>

          <div className="border-t-2 border-gray-200 pt-4 mt-auto">
            <div className="flex justify-between items-center text-lg font-bold mb-6">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-bold transition-colors"
              onClick={() => alert('Proceeding to checkout... (demo)')}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartSidebar;
