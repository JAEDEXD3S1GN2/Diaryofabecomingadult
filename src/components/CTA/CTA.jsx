import React from "react";

const CTA = () => {
  return (
    <section className="bg-greenBrand py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-16 md:px-16 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-diary text-white leading-tight">
            You’re Becoming — <br className="hidden md:block" />
            and you don’t have to do it alone
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
            Through honest stories, reflective blog posts, and thoughtful
            podcasts, this space exists to support your growth — one step, one
            lesson, one moment at a time.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-orangeBrand px-8 py-4 text-blackBrand font-semibold transition hover:scale-105 hover:opacity-90"
            >
              Read the Blog
            </a>

            <a
              href="/podcasts"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 text-white font-medium transition hover:bg-white hover:text-blackBrand"
            >
              Listen to the Podcast
            </a>
          </div>

          {/* Subtle closing line */}
          <p className="mt-10 text-sm text-white/60">
            No pressure. No perfection. Just growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
