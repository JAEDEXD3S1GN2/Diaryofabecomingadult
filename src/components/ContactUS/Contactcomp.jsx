import React from "react";

const Contactcomp = () => {
  return (
    <main className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-diary text-blackBrand">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-blackBrand/70 leading-relaxed">
            Whether you have a thought to share, a story to tell, or simply want
            to say hello — this space is open to you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-20 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-diary text-blackBrand mb-8">
              Let’s Connect
            </h2>
            <p className="text-blackBrand/70 leading-relaxed mb-10">
              This diary grows through shared experiences. If you have feedback,
              collaboration ideas, podcast topics, or personal reflections you’d
              like to share, feel free to reach out.
            </p>

            <div className="space-y-6 text-blackBrand/80">
              <div>
                <p className="text-sm uppercase tracking-wide text-blackBrand/50">
                  Email
                </p>
                <p className="text-lg">hello@becomingadult.com</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-blackBrand/50">
                  Social
                </p>
                <p className="text-lg">Instagram • Twitter</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-sm p-10 md:p-14">
            <form className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-blackBrand mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-blackBrand/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-greenBrand/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blackBrand mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-blackBrand/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-greenBrand/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blackBrand mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Share your thoughts..."
                  className="w-full rounded-xl border border-blackBrand/10 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-greenBrand/40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-orangeBrand py-4 text-blackBrand font-semibold transition hover:scale-[1.02] hover:opacity-90"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-blackBrand/50">
                Your message is read with care and respect.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing Line */}
      <section className="bg-greenBrand py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-xl md:text-2xl font-diary">
            Every conversation is part of the journey.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contactcomp;
