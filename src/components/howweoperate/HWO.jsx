import React from "react";

const steps = [
  {
    title: "Read & Reflect",
    description:
      "Thoughtfully written blog posts that explore growth, self-awareness, life lessons, and the realities of becoming an adult.",
    image: "BLOG IMAGE",
  },
  {
    title: "Listen & Absorb",
    description:
      "Podcast episodes that feel like honest conversations — stories, reflections, and lessons you can listen to anytime.",
    image: "PODCAST IMAGE",
  },
  {
    title: "Grow at Your Pace",
    description:
      "There’s no rush here. Take what resonates, reflect on it, and grow in your own time and direction.",
    image: "GROWTH IMAGE",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-diary text-blackBrand">
            How This Website Works
          </h2>
          <p className="mt-6 text-lg text-blackBrand/70">
            This is a space built for growth — through reading, listening, and
            reflecting on real experiences.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-16 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Image Placeholder */}
              <div className="w-full h-56 rounded-2xl bg-cream flex items-center justify-center mb-8">
                <span className="text-blackBrand/40 text-sm tracking-wide">
                  {step.image}
                </span>
              </div>

              {/* Number */}
              <div className="mb-4 text-orangeBrand font-semibold text-sm">
                STEP {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-greenBrand mb-4">
                {step.title}
              </h3>
              <p className="text-blackBrand/70 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
          <p className="text-blackBrand/80 text-lg leading-relaxed">
            This isn’t about perfection or having it all figured out. It’s about
            showing up, learning continuously, and becoming — one story at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
