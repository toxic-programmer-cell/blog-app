import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ props }) {
  const { _id, title, description, image, category } = props;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <img src={image} alt={title} className="aspect-video" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 text-primary rounded-full text-xs">
        {category}
      </span>
      <div className="py-3 px-4">
        <h5 className="mb-2 font-medium text-gray-800">{title}</h5>
        <p
          className="mb-3 text-xs text-gra-500"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
}

export default BlogCard;
