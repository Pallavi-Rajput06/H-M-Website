import React from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;
  const { onAddToCart, favourites = [], onToggleFavourite } =
    useOutletContext() || {};

  if (!item) {
    return (
      <div className="px-4">
        <p className="text-sm text-neutral-500">
          No product selected. Go back to the collection to choose an item.
        </p>
        <button
          type="button"
          className="mt-4 rounded-full border border-neutral-300 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-700 hover:border-neutral-900 hover:text-neutral-900"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-10 px-4 lg:grid-cols-2">
      <div className="overflow-hidden rounded-[40px] bg-neutral-100">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full max-h-[80vh] object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold tracking-[0.4em] text-neutral-400">
            HOLIDAY 2025
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            {item.name}
          </h1>
          <p className="text-lg font-semibold">{item.price}</p>
          <p className="text-[11px] text-neutral-500">
            MRP inclusive of all taxes
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold text-neutral-700 tracking-[0.2em] text-[11px]">
            COLOUR
          </p>
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 overflow-hidden rounded-xl bg-neutral-100">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm text-neutral-700">As shown</p>
          </div>
        </div>

        <button
          type="button"
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:bg-black"
          onClick={() => {
            if (onAddToCart) {
              onAddToCart(item);
            }
          }}
        >
          <ShoppingBag className="h-4 w-4" />
          Add
        </button>

        <div className="space-y-4 text-sm">
          <button className="flex w-full items-center justify-between border-b border-neutral-200 py-3 text-left text-neutral-800">
            <span className="text-xs font-semibold tracking-[0.2em]">
              DESCRIPTION
            </span>
            <span className="text-lg">+</span>
          </button>
          <button className="flex w-full items-center justify-between border-b border-neutral-200 py-3 text-left text-neutral-800">
            <span className="text-xs font-semibold tracking-[0.2em]">
              MATERIALS
            </span>
            <span className="text-lg">+</span>
          </button>
          <button className="flex w-full items-center justify-between border-b border-neutral-200 py-3 text-left text-neutral-800">
            <span className="text-xs font-semibold tracking-[0.2em]">
              DELIVERY, PAYMENT AND RETURNS
            </span>
            <span className="text-lg">+</span>
          </button>
        </div>

        <button
          type="button"
          className="mt-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 hover:text-neutral-900"
          onClick={() => navigate(-1)}
        >
          ← Back to products
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;


