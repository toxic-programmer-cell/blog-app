import React from "react";

function Newsletter() {
  return (
    <div className="relative my-32 flex justify-center">
      {/* Glow background */}
      <div className="absolute -z-10 inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full"></div>
      </div>

      {/* Card */}
      <div
        className="max-w-3xl w-full text-center p-10 rounded-3xl
                      bg-white/70 backdrop-blur-xl
                      border border-white/30
                      shadow-2xl shadow-primary/20"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Never Miss a Blog 🚀
        </h1>

        <p className="mt-3 text-gray-500 md:text-lg">
          Get the latest blogs, tech insights, and exclusive updates straight to
          your inbox.
        </p>

        {/* Form */}
        <form className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 px-4 h-12 rounded-full
                       border border-gray-300
                       outline-none focus:ring-2 focus:ring-primary/40
                       text-gray-600"
          />

          <button
            type="submit"
            className="h-12 px-8 rounded-full text-white font-medium
                       bg-primary hover:bg-primary/90
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-primary/30
                       active:scale-95"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-400">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

export default Newsletter;
