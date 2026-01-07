import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ props }) {
  const { _id, title, description, image, category } = props;

  const navigate = useNavigate();
  return (
    // <div
    //   onClick={() => navigate(`/blog/${_id}`)}
    //   className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    // >
    //   <img src={image} alt={title} className="aspect-video" />
    //   <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 text-primary rounded-full text-xs">
    //     {category}
    //   </span>
    //   <div className="py-3 px-4">
    //     <h5 className="mb-2 font-medium text-gray-800">{title}</h5>
    //     <p
    //       className="mb-3 text-xs text-gra-500"
    //       dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
    //     ></p>
    //   </div>
    // </div>
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="group w-full rounded-2xl overflow-hidden cursor-pointer
             bg-white shadow-md hover:shadow-2xl hover:shadow-primary/20
             transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover
                 transition-transform duration-700
                 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t 
                    from-black/30 via-black/10 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500"
        />
      </div>

      {/* Category */}
      <span
        className="inline-block ml-4 mt-4 px-3 py-1 
                   bg-primary/15 text-primary 
                   rounded-full text-xs font-medium"
      >
        {category}
      </span>

      {/* Content */}
      <div className="px-4 py-3">
        <h5
          className="mb-2 font-semibold text-gray-800
                 transition-colors duration-300
                 group-hover:text-primary"
        >
          {title}
        </h5>

        <p
          className="text-xs text-gray-500 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 90) }}
        />
      </div>
    </div>
  );
}

export default BlogCard;
