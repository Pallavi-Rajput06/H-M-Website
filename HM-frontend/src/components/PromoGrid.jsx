import React from "react";

const PromoGrid = ({ promos = [] }) => {
  if (!promos.length) return null;

  return (
    <section className="grid gap-6 md:grid-cols-2">
      {promos.map((promo, index) => (
        <article
          key={promo.title + index}
          className="group relative overflow-hidden rounded-[32px] bg-neutral-100"
        >
          <img
            src={promo.image}
            alt={promo.title}
            className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end gap-2 p-8 text-white">
            <p className="text-sm tracking-[0.4em] text-white/70">
              {promo.eyebrow || "FEATURE"}
            </p>
            <h3 className="text-2xl font-semibold">{promo.title}</h3>
            <p className="text-sm text-white/80">{promo.subtitle}</p>
            <button className="mt-3 self-start rounded-full border border-white/40 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-white hover:text-neutral-900">
              {promo.ctaLabel}
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default PromoGrid;

