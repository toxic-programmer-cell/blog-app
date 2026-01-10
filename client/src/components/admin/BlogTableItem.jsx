import React from "react";
import { assets } from "../../assets/assets";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const blogDate = new Date(createdAt);
  return (
    <tr className="border-y border-gray-300">
      <th>{index + 1}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{blogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "unpublished"}
        </p>
      </td>
      <td className="px-2 py-4 text-xs gap-3 flex flex-wrap items-center">
        <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
          {blog.isPublished ? "unpublish" : "publish"}
        </button>
        <img
          src={assets.cross_icon}
          alt=""
          className="w-8 hover:scale-105 transition-all cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
