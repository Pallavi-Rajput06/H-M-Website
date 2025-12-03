import React from "react";
import { NavLink } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3 text-xs">
            <p className="font-semibold tracking-[0.25em] text-neutral-400">
              SHOP
            </p>
            <nav className="space-y-1 text-[13px] text-neutral-800">
              <NavLink to="/" className="block hover:underline">
                Ladies
              </NavLink>
              <NavLink to="/men" className="block hover:underline">
                Men
              </NavLink>
              <NavLink to="/kid" className="block hover:underline">
                Kids
              </NavLink>
              <NavLink to="/home" className="block hover:underline">
                Home
              </NavLink>
              <NavLink to="/beauty" className="block hover:underline">
                Beauty
              </NavLink>
            </nav>
          </div>

          <div className="space-y-3 text-xs">
            <p className="font-semibold tracking-[0.25em] text-neutral-400">
              CORPORATE INFO
            </p>
            <ul className="space-y-1 text-[13px] text-neutral-800">
              <li>About H&M Group</li>
              <li>Sustainability</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <p className="font-semibold tracking-[0.25em] text-neutral-400">
              HELP
            </p>
            <ul className="space-y-1 text-[13px] text-neutral-800">
              <li>Customer Service</li>
              <li>My Account</li>
              <li>Store Locator</li>
              <li>Legal &amp; privacy</li>
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <p className="font-semibold tracking-[0.25em] text-neutral-400">
              NEWSLETTER
            </p>
            <p className="text-[13px] text-neutral-700">
              Sign up to be the first to know about new collections, style
              inspiration and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full border border-neutral-300 px-4 py-2 text-[13px] outline-none placeholder:text-neutral-400"
              />
              <button className="rounded-full bg-neutral-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white hover:bg-black">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-[11px] text-neutral-500 md:flex-row">
          <p>India (Rs.)</p>
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} H&M Clone UI. For educational use only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;


