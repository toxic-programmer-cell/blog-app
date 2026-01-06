import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8 ">
        <div className="inline-flex items-center bg-primary/10 gap-4 text-sm rounded-full py-1.5 px-4 mb-2 border border-primary/10 ">
          <p>New AI feature integrated</p>
          <img src={assets.star_icon} alt="star-icon" className="w-2.5" />
        </div>
        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Your own <span className="text-primary">blogging</span> <br />
          platform
        </h1>
        <p className="my-6 sm:my-8 text-gray-500 max-w-2xl m-auto max-sm:text-xs">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it’s one word or a thousand, your story
          starts right here.
        </p>
        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden p-1">
          <input
            type="text"
            placeholder="Search for blog"
            required
            className="pl-2 outline-0 w-full"
          />
          <button
            type="submit"
            className="bg-primary text-white py-1.5 px-4 rounded"
          >
            Search
          </button>
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        alt="background"
        className="absolute -top-50 -z-1 opacity-70"
      />
    </div>
  );
}

export default Header;
