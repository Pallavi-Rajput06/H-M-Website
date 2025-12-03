import React from "react";
import { useOutletContext } from "react-router-dom";

const CartPage = () => {
  const { cartItems = [] } = useOutletContext() || {};

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <div className="space-y-6 px-4">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.4em] text-neutral-400">
          SHOPPING BAG
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Your cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-sm text-neutral-500">
          Your cart is empty. Add items from any category to see them here.
        </p>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex gap-4 rounded-3xl border border-neutral-200 p-4"
              >
                <div className="h-24 w-24 overflow-hidden rounded-2xl bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {item.name}
                    </p>
                    <p className="text-neutral-500">{item.price}</p>
                    <p className="mt-1 text-xs text-neutral-500">
                      Qty: {item.quantity || 1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-neutral-200 pt-4 text-sm">
            <p className="text-neutral-600">Total items</p>
            <p className="font-semibold text-neutral-900">{subtotal}</p>
          </div>

          <button className="w-full rounded-full bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-black">
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;


