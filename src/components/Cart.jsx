// src/components/Cart.jsx
import React from 'react';

function Cart({ cartItems }) {
  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-12">
      <h2 className="text-2xl mb-4 text-red-700">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className="border-b border-gray-300 pb-2"
            >
              <p className="font-semibold">
                {item.name} (x{item.quantity})
              </p>
              <p className="text-sm text-gray-600">
                {item.includes}
              </p>
              {item.notes && (
                <p className="italic text-sm text-gray-600">
                  Notes: {item.notes}
                </p>
              )}
              <p className="text-sm text-gray-600">
                Subtotal: ${item.price * item.quantity}
              </p>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-bold">Total: ${totalPrice}</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => alert('Proceeding to checkout ... (demo)')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
