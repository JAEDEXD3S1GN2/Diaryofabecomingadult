import React from "react";

/* ===============================
   Dummy Blog / Podcast Data
================================ */
const posts = [
  {
    id: 1,
    title: "Learning to Grow Without Rushing",
    excerpt:
      "Growth doesn’t always announce itself. Sometimes it happens quietly, in moments we almost overlook.",
    category: "Growth",
    date: "Jan 12, 2026",
    duration: "6 min read",
    image: "IMAGE PLACEHOLDER",
  },
  {
    id: 2,
    title: "Podcast: Becoming Comfortable With Uncertainty",
    excerpt:
      "A reflective conversation about not having everything figured out — and learning to be okay with that.",
    category: "Podcast",
    date: "Jan 08, 2026",
    duration: "18 min listen",
    image: "PODCAST IMAGE",
  },
  {
    id: 3,
    title: "Mistakes That Quietly Shape Us",
    excerpt:
      "Some lessons don’t come loudly. They settle into us slowly and change how we see life.",
    category: "Reflection",
    date: "Dec 29, 2025",
    duration: "5 min read",
    image: "IMAGE PLACEHOLDER",
  },
  {
    id: 4,
    title: "Podcast: Conversations With Your Younger Self",
    excerpt:
      "What would you say if you could sit across from who you used to be?",
    category: "Podcast",
    date: "Dec 20, 2025",
    duration: "22 min listen",
    image: "PODCAST IMAGE",
  },
];

/* ===============================
   Blog Page Component
================================ */
const Blog = () => {
  return (
    <main className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-diary text-blackBrand">
            The Diary
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-blackBrand/70 leading-relaxed">
            Stories, reflections, and conversations about growth, learning, and
            becoming.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-56 bg-blackBrand/5 flex items-center justify-center">
                <span className="text-blackBrand/40 text-sm">
                  {post.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col h-full">
                {/* Meta */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-greenBrand font-medium">
                    {post.category}
                  </span>
                  <span className="text-blackBrand/50">
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-blackBrand leading-snug mb-4 group-hover:text-greenBrand transition">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-blackBrand/70 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blackBrand/50">
                    {post.duration}
                  </span>
                  <a
                    href="#"
                    className="text-orangeBrand font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-greenBrand py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-diary">
            Every post is part of the process
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Take what resonates. Leave what doesn’t. Keep becoming.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Blog;
