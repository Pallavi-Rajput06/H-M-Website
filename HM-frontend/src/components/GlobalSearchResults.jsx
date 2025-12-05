import React, { useMemo } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { sectionContent } from "../data/sectionContent";

const GlobalSearchResults = ({
  searchQuery = "",
  favourites = [],
  onToggleFavourite,
  onAddToCart,
}) => {
  const navigate = useNavigate();

  const normalizedQuery = searchQuery.trim().toLowerCase();

  // Search across all sections
  const allResults = useMemo(() => {
    if (normalizedQuery.length === 0) return [];

    const results = [];

    // Search in ladies section
    if (sectionContent.ladies?.highlights?.items) {
      sectionContent.ladies.highlights.items.forEach((item) => {
        if (item.name.toLowerCase().includes(normalizedQuery)) {
          results.push({ ...item, category: "Ladies" });
        }
      });
    }

    // Search in men section
    if (sectionContent.men?.highlights?.items) {
      sectionContent.men.highlights.items.forEach((item) => {
        if (item.name.toLowerCase().includes(normalizedQuery)) {
          results.push({ ...item, category: "Men" });
        }
      });
    }

    // Search in kids section
    if (sectionContent.kids?.highlights?.items) {
      sectionContent.kids.highlights.items.forEach((item) => {
        if (item.name.toLowerCase().includes(normalizedQuery)) {
          results.push({ ...item, category: "Kids" });
        }
      });
    }

    // Search in home section
    if (sectionContent.home?.highlights?.items) {
      sectionContent.home.highlights.items.forEach((item) => {
        if (item.name.toLowerCase().includes(normalizedQuery)) {
          results.push({ ...item, category: "Home" });
        }
      });
    }

    // Search in beauty section
    if (sectionContent.beauty?.highlights?.items) {
      sectionContent.beauty.highlights.items.forEach((item) => {
        if (item.name.toLowerCase().includes(normalizedQuery)) {
          results.push({ ...item, category: "Beauty" });
        }
      });
    }

    return results;
  }, [normalizedQuery]);

  if (normalizedQuery.length === 0) return null;

  return (
    <section className="space-y-8 px-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold tracking-tight">
          Search Results
        </h2>
        <p className="text-sm text-neutral-500">
          Found {allResults.length} product{allResults.length !== 1 ? "s" : ""}{" "}
          matching &quot;{searchQuery}&quot;
        </p>
      </div>

      {allResults.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-neutral-500">
            No products found matching &quot;{searchQuery}&quot;.
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Try searching with different keywords.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allResults.map((item) => {
            const isFavourite = favourites?.some(
              (favItem) => favItem.name === item.name
            );

            return (
              <article key={`${item.category}-${item.name}`} className="group space-y-4">
                <button
                  type="button"
                  className="relative block w-full overflow-hidden rounded-[30px] bg-neutral-100"
                  onClick={() =>
                    navigate("/product", {
                      state: { item },
                    })
                  }
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-900">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute left-4 bottom-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-600">
                    {item.category}
                  </span>
                  <button
                    type="button"
                    className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border text-neutral-600 transition ${
                      isFavourite
                        ? "border-red-500 bg-red-500 text-white"
                        : "border-white/80 bg-white/80 hover:border-red-500 hover:text-red-500"
                    }`}
                    aria-label={
                      isFavourite ? "Remove from favourites" : "Add to favourites"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavourite && onToggleFavourite(item);
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </button>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-neutral-900">{item.name}</p>
                    <p className="text-neutral-500">{item.price}</p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
                    onClick={() => onAddToCart && onAddToCart(item)}
                  >
                    <ShoppingBag className="h-3 w-3" />
                    <span>Add to cart</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default GlobalSearchResults;

