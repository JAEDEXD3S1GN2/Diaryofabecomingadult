import React from "react";

const Register = () => {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm">
        {/* Left (Message) */}
        <div className="hidden md:flex flex-col justify-center bg-greenBrand text-white p-16">
          <h1 className="text-4xl font-diary mb-6 leading-tight">
            Begin Your Journey
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Growth starts with intention. Create an account to read, listen, and
            grow at your own pace.
          </p>
        </div>

        {/* Right (Form) */}
        <div className="p-10 md:p-16">
          <h2 className="text-3xl font-diary text-blackBrand mb-8">
            Create an Account
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-blackBrand mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-blackBrand/10 px-4 py-3 focus:ring-2 focus:ring-greenBrand/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blackBrand mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-blackBrand/10 px-4 py-3 focus:ring-2 focus:ring-greenBrand/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blackBrand mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-blackBrand/10 px-4 py-3 focus:ring-2 focus:ring-greenBrand/40 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orangeBrand py-4 text-blackBrand font-semibold transition hover:scale-[1.02] hover:opacity-90"
            >
              Create Account
            </button>

            <p className="text-sm text-center text-blackBrand/60">
              Already have an account?{" "}
              <a href="/login" className="text-greenBrand font-medium">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
