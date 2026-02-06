import React from "react";

const themes = [
  {
    title: "Growth",
    description:
      "Personal growth isn’t loud. It’s slow, quiet, and deeply intentional. This space captures the journey of becoming.",
    image: "IMAGE_PLACEHOLDER_1",
  },
  {
    title: "Reflection",
    description:
      "Thoughts written in moments of clarity, confusion, and honesty — because reflection is how growth begins.",
    image: "IMAGE_PLACEHOLDER_2",
  },
  {
    title: "Learning",
    description:
      "Lessons from mistakes, wins, losses, and everything in between. No manuals — just lived experience.",
    image: "IMAGE_PLACEHOLDER_3",
  },
  {
    title: "Becoming",
    description:
      "Not fully there yet, but moving forward anyway. Becoming is a process, not a destination.",
    image: "IMAGE_PLACEHOLDER_4",
  },
];

const Themes = () => {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-diary font-Inter text-blackBrand">
            What This Diary Is About
          </h2>
          <p className="mt-6 text-blackBrand/70 font-Merriwether text-lg">
            This blog documents the quiet, messy, and beautiful journey of
            growing into adulthood.
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-blackBrand/5 flex items-center justify-center">
                <span className="text-blackBrand/40 text-sm tracking-wide">
                  {theme.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-10">
                <h3 className="text-2xl font-semibold font-Inter text-greenBrand mb-4">
                  {theme.title}
                </h3>
                <p className="text-blackBrand/70 font-Merriwether leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;
