import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const { favourites = [] } = useOutletContext() || {};
  const navigate = useNavigate();

  return (
    <div className="space-y-6 px-4">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.4em] text-neutral-400">
          FAVOURITES
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Your saved items
        </h1>
      </div>

      {favourites.length === 0 ? (
        <p className="text-sm text-neutral-500">
          You haven&apos;t added any favourites yet. Tap the heart icon on a
          product to save it here.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favourites.map((item) => (
            <article key={item.name} className="space-y-3">
              <button
                type="button"
                className="group block w-full overflow-hidden rounded-[30px] bg-neutral-100"
                onClick={() =>
                  navigate("/product", {
                    state: { item },
                  })
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-semibold text-neutral-900">{item.name}</p>
                  <p className="text-neutral-500">{item.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;


