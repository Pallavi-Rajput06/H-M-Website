import React from "react";

const CategoryGrid = ({
  eyebrow,
  title,
  description,
  categories = [],
}) => {
  if (!categories.length) return null;

  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          {eyebrow && (
            <p className="text-[11px] font-semibold tracking-[0.4em] text-neutral-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        </div>
        {description && (
          <p className="max-w-xl text-sm text-neutral-500">{description}</p>
        )}
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <a
            key={category.label}
            href={category.href || "#"}
            className="group relative block overflow-hidden rounded-[28px] bg-neutral-100"
          >
            <img
              src={category.image}
              alt={category.label}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition group-hover:opacity-90" />
            <p className="absolute bottom-6 left-6 text-lg font-semibold tracking-wide text-white">
              {category.label}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;

