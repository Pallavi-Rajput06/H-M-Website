import React from "react";

const ProductHighlights = ({ eyebrow, title, items = [] }) => {
  if (!items.length) return null;

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          {eyebrow && (
            <p className="text-[11px] font-semibold tracking-[0.4em] text-neutral-400">
              {eyebrow}
            </p>
          )}
          <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
        </div>
        <button className="self-start rounded-full border border-neutral-200 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900">
          View all
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.name} className="group space-y-4">
            <div className="relative overflow-hidden rounded-[30px] bg-neutral-100">
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
            </div>
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="font-semibold text-neutral-900">{item.name}</p>
                <p className="text-neutral-500">{item.price}</p>
              </div>
              <button className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900">
                Add
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlights;

