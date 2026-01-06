import React, { useState } from "react";
import { blogCategories } from "../assets/assets";
import { motion } from "motion/react";

function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-3 sm:gap-8 my-10 relative">
        {blogCategories.map((category) => (
          <div key={category} className="relative text-sm sm:text-base">
            <button
              className={`cursor-pointer text-gray-500 ${
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
      <div>blog card</div>
    </div>
  );
}

export default BlogList;
