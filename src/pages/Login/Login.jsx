import React from "react";

const Login = () => {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm">
        {/* Left (Form) */}
        <div className="p-10 md:p-16">
          <h2 className="text-3xl font-diary text-blackBrand mb-8">
            Welcome Back
          </h2>

          <form className="space-y-6">
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
                placeholder="Enter your password"
                className="w-full rounded-xl border border-blackBrand/10 px-4 py-3 focus:ring-2 focus:ring-greenBrand/40 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orangeBrand py-4 text-blackBrand font-semibold transition hover:scale-[1.02] hover:opacity-90"
            >
              Sign In
            </button>

            <div className="text-center text-sm text-blackBrand/60">
              <a href="#" className="hover:underline">
                Forgot your password?
              </a>
            </div>

            <p className="text-sm text-center text-blackBrand/60">
              Don’t have an account?{" "}
              <a href="/register" className="text-greenBrand font-medium">
                Create one
              </a>
            </p>
          </form>
        </div>

        {/* Right (Message) */}
        <div className="hidden md:flex flex-col justify-center bg-blackBrand text-white p-16">
          <h1 className="text-4xl font-diary mb-6 leading-tight">
            Still Becoming
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Welcome back. Continue where you left off — one thought, one lesson,
            one moment at a time.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
