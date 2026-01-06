import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";

function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      {/* <div className="flex justify-center gap-3 sm:gap-8 my-10 relative">
        <div className="border border-gray-600 flex gap-3 sm:gap-8 py-2 px-10 rounded-full shadow-2xl shadow-primary/30 bg-primary/30 text-primary">
          {blogCategories.map((category) => (
            <div key={category} className="relative text-sm sm:text-base">
              <button
                className={`cursor-pointer text-primary ${
                  menu === category && "text-white px-5 pt-o.5"
                }`}
                onClick={() => setMenu(category)}
              >
                {category}
                {menu === category && (
                  <motion.div
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute bg-primary h-7 left-0 right-0 top-0 -z-1 rounded-full"
                  ></motion.div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div> */}

      <div className="flex justify-center my-12">
        <div
          className="relative flex gap-1 sm:gap-3 p-2 rounded-full 
                  bg-white/10 backdrop-blur-xl border border-white/20 
                  shadow-xl shadow-primary/20 text-sm"
        >
          {blogCategories.map((category) => {
            const isActive = menu === category;

            return (
              <button
                key={category}
                onClick={() => setMenu(category)}
                className={`relative px-2 sm:px-5 py-2 rounded-full text-sm sm:text-base 
            font-medium transition-colors duration-300
            ${isActive ? "text-white" : "text-gray-400 hover:text-primary"}
          `}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blog) => menu === "All" || blog.category === menu)
          .map((blog) => (
            <BlogCard key={blog._id} props={blog} />
          ))}
      </div>
    </div>
  );
}

export default BlogList;
