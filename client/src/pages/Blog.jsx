import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import moment from "moment";
import Footer from "../components/Footer";

function Blog() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchBlogData = async () => {
    const data = blog_data.find((blog) => blog._id === id);
    setBlogData(data);
  };

  const fetchComment = async () => {
    setCommentData(comments_data);
  };

  useEffect(() => {
    fetchBlogData();
    fetchComment();
  }, [id]);

  return (
    <div>
      <Navbar />
      {blogData ? (
        <div>
          <div className="mx-8 sm:mx-16 xl:mx-24 relative">
            <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-primary/30 via-purple-300/30 to-pink-300/30 blur-3xl"></div>

            <div className="text-center mt-20 mb-8 ">
              <div>
                <p className="text-primary text-sm">
                  Published on{" "}
                  {moment(blogData?.createdAt).format("MMMM Do YYYY")}
                </p>
              </div>
              <h1 className="text-2xl sm:text-5xl font-semibold sm:leading-16 text-gray-700 max-w-2xl mx-auto">
                {blogData?.title}
              </h1>
              <p className="my-6 sm:my-8 text-gray-500 max-w-2xl m-auto max-sm:text-xs">
                {blogData?.subTitle}
              </p>
              <div
                className="relative inline-flex p-[1.5px] mb-2 rounded-full 
                      bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                      animate-border"
              >
                <div
                  className="inline-flex items-center gap-3 text-sm rounded-full 
                        py-1.5 px-4 bg-white"
                >
                  <p className="text-gray-700 font-medium">Michael Brown</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
            <img
              src={blogData.image}
              alt="image"
              className="rounded-3xl mb-5"
            />
            <div
              className="rich-text max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: blogData?.description }}
            ></div>
          </div>

          {/* comment section */}
          <div className="mt-14 mb-10 max-w-3xl mx-auto">
            <p className="font-semibold mb-2">
              comments ({commentData.length})
            </p>
            <div className="flex flex-col gap-4">
              {commentData.map((item) => (
                <div
                  key={item._id}
                  className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={assets.user_icon}
                      alt="user-icon"
                      className="w-6"
                    />
                    <p className="font-medium">{item?.name}</p>
                  </div>
                  <p className="text-sm max-w-md ml-8">{item?.content}</p>
                  <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                    {moment(item?.createdAt).fromNow()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add comment form */}
          <div className="max-w-3xl mx-auto">
            <p className="font-semibold mb-4">Add Your Comment</p>
            <form className="flex flex-col items-start gap-4 max-w-lg">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full p-2 border border-gray-300 outline-none rounded-lg"
              />
              <textarea
                placeholder="Comment"
                className="w-full p-2 border border-gray-300 rounded-lg outline-none h-48"
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-white rounded-lg py-2 px-5 hover:scale-102 transition-all cursor-pointer duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </div>
  );
}

export default Blog;
