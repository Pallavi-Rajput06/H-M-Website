import React from "react";

const alignmentMap = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

const gradientMap = {
  left: "bg-gradient-to-r from-black/65 via-black/35 to-transparent",
  center: "bg-black/40",
  right: "bg-gradient-to-l from-black/65 via-black/35 to-transparent",
};

const SectionHero = ({
  image,
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaLink = "#",
  align = "left",
}) => {
  return (
    <section className="relative min-h-[420px] overflow-hidden rounded-[40px] bg-neutral-100">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className={`absolute inset-0 ${gradientMap[align] || gradientMap.left}`}
      />
      <div
        className={`relative z-10 flex h-full flex-col justify-center gap-4 px-6 py-16 text-white sm:px-12 lg:px-16 ${alignmentMap[align]}`}
      >
        {eyebrow && (
          <p className="text-[11px] font-semibold tracking-[0.4em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-base font-light text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
        {ctaLabel && (
          <a
            href={ctaLink}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
};

export default SectionHero;

