import React from "react";

const EditorialSpotlight = ({
  eyebrow,
  badge,
  title,
  description,
  ctaLabel,
  image,
}) => {
  if (!title) return null;

  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <article className="relative overflow-hidden rounded-[36px] bg-neutral-100">
        <img
          src={image}
          alt={title}
          className="h-[500px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-8 top-8 flex items-center gap-3">
          {eyebrow && (
            <span className="rounded-full bg-white/80 px-5 py-2 text-[11px] font-semibold tracking-[0.4em] text-neutral-800">
              {eyebrow}
            </span>
          )}
          {badge && (
            <span className="rounded-full bg-neutral-900/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white">
              {badge}
            </span>
          )}
        </div>
      </article>
      <div className="space-y-6">
        <h3 className="text-4xl font-semibold tracking-tight">{title}</h3>
        {description && (
          <p className="text-base text-neutral-600">{description}</p>
        )}
        {ctaLabel && (
          <button className="rounded-full border border-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] transition hover:bg-neutral-900 hover:text-white">
            {ctaLabel}
          </button>
        )}
      </div>
    </section>
  );
};

export default EditorialSpotlight;

