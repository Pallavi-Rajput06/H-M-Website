import React, { useMemo, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import SiteFooter from "../components/SiteFooter";

const HomeLayout = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const mainNav = [
    { label: "Ladies", path: "/" },
    { label: "Men", path: "/men" },
    { label: "Kids", path: "/kid" },
    { label: "Home", path: "/home" },
    { label: "Beauty", path: "/beauty" },
  ];

  const handleToggleFavourite = (item) => {
    setFavourites((prev) => {
      const exists = prev.some((p) => p.name === item.name);
      if (exists) {
        return prev.filter((p) => p.name !== item.name);
      }
      return [...prev, item];
    });
  };

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.name === item.name);
      if (exists) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const totalCartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0),
    [cartItems]
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="border-b border-neutral-200 bg-neutral-50 text-[11px] tracking-[0.2em] uppercase">
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-2">
          <p className="text-neutral-500">
            Free standard delivery for members on orders over ₹1,999
          </p>
          <div className="flex gap-6 text-neutral-600">
            <button className="hover:text-neutral-900">Customer Service</button>
            <button className="hover:text-neutral-900">Newsletter</button>
            <button className="hover:text-neutral-900">Store Locator</button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="h-10 w-16">
              <img
                className="h-full w-full object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
                alt="H&M logo"
              />
            </a>
            <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-[0.2em]">
              {mainNav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors hover:text-neutral-900 ${
                      isActive ? "text-neutral-900" : "text-neutral-400"
                    }`
                  }
                >
                  {item.label.toUpperCase()}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end gap-5">
            <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-500">
              <Search className="h-4 w-4" />
              <input
                className="w-full bg-transparent outline-none placeholder:tracking-widest placeholder:text-neutral-400"
                type="search"
                placeholder="SEARCH PRODUCTS"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-900"
              aria-label="Account"
              onClick={() => navigate("/auth")}
            >
              <User className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-900"
              aria-label="Wishlist"
              onClick={() => navigate("/wishlist")}
            >
              <Heart className="h-4 w-4" />
              {favourites.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  {favourites.length}
                </span>
              )}
            </button>
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-900"
              aria-label="Bag"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag className="h-4 w-4" />
              {totalCartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-neutral-900 px-1 text-[10px] font-semibold text-white">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="w-full pb-24 pt-10">
        <Outlet
          context={{
            searchQuery,
            favourites,
            cartItems,
            onToggleFavourite: handleToggleFavourite,
            onAddToCart: handleAddToCart,
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
};

export default HomeLayout;