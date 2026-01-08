import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import moment from "moment";
import Footer from "../components/Footer";
import Loder from "../components/Loder";

function Blog() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const fetchBlogData = async () => {
    const data = blog_data.find((blog) => blog._id === id);
    setBlogData(data);
  };

  const fetchComment = async () => {
    setCommentData(comments_data);
  };

  const addComment = async (e) => {
    e.preventDefault();
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
          {/* content section */}
          {/* <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
            <img
              src={blogData.image}
              alt="image"
              className="rounded-3xl mb-5"
            />
            <div
              className="rich-text max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: blogData?.description }}
            ></div>
          </div> */}
          <div className="w-full">
            {/* Hero Image */}
            <div className="relative w-full max-h-[520px] overflow-hidden max-w-5xl mx-auto">
              <img
                src={blogData.image}
                alt="blog cover"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            </div>

            {/* Article Container */}
            <div className="relative -mt-24">
              <div className="max-w-4xl mx-auto bg-white rounded-3xl px-6 sm:px-12 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <article
                  className="
          mx-auto max-w-2xl
          text-gray-800
          leading-[1.8]
          text-[17px]
          font-[450]

          [&_h1]:text-4xl
          [&_h1]:font-bold
          [&_h1]:mb-6

          [&_h2]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:mt-10
          [&_h2]:mb-4

          [&_p]:mb-6
          [&_p]:text-gray-700

          [&_a]:text-black
          [&_a]:underline
          [&_a]:underline-offset-4

          [&_blockquote]:border-l-4
          [&_blockquote]:border-black
          [&_blockquote]:pl-6
          [&_blockquote]:italic
          [&_blockquote]:my-8
          [&_blockquote]:text-gray-600

          [&_img]:rounded-xl
          [&_img]:my-8
        "
                  dangerouslySetInnerHTML={{ __html: blogData?.description }}
                />
              </div>
            </div>
          </div>

          {/* comment section */}
          {/* <div className="mt-14 mb-10 max-w-3xl mx-auto">
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
          </div> */}

          <div className="mt-16 mb-12 max-w-3xl mx-auto px-4">
            <h3 className="font-semibold text-lg mb-4 text-gray-800">
              Comments{" "}
              <span className="text-gray-400">({commentData.length})</span>
            </h3>

            <div className="flex flex-col gap-5">
              {commentData.map((item) => (
                <div
                  key={item._id}
                  className="group relative bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={assets.user_icon}
                      alt="user"
                      className="w-8 h-8 rounded-full border"
                    />

                    <div className="flex flex-col">
                      <p className="font-medium text-gray-900 text-sm">
                        {item?.name}
                      </p>
                      <span className="text-xs text-gray-400">
                        {moment(item?.createdAt).fromNow()}
                      </span>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-gray-700 leading-relaxed ml-11">
                    {item?.content}
                  </p>

                  {/* Hover accent */}
                  <span className="absolute left-0 top-4 h-[70%] w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Add comment form */}
          <div className="max-w-3xl mx-auto mt-20 px-4">
            <h3 className="font-semibold text-lg mb-6 text-gray-900">
              Leave a comment
            </h3>

            <form
              onSubmit={addComment}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-5 max-w-xl"
            >
              {/* Name */}
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />

              {/* Comment */}
              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Write your thoughts here…"
                className="
        w-full px-4 py-3
        border border-gray-300 rounded-xl
        text-sm
        placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-primary/30
        h-40 resize-none
      "
              />

              {/* Submit */}
              <button
                type="submit"
                className="
        self-start
        bg-black text-white
        rounded-full
        px-6 py-2.5
        text-sm font-medium
        hover:bg-gray-900
        transition
      "
              >
                Post comment
              </button>
            </form>
          </div>

          {/* Share Button */}
          <div className="max-w-3xl mx-auto mt-20 px-4">
            <div className="my-24 max-w-3xl mx-auto">
              <p className="font-semibold my-4">
                Share the Article on Social Media
              </p>
              <div className="flex gap-2">
                <img
                  src={assets.facebook_icon}
                  alt=""
                  width={50}
                  className="cursor-pointer hover:scale-102 transition-all duration-200"
                />
                <img
                  src={assets.twitter_icon}
                  alt=""
                  width={50}
                  className="cursor-pointer hover:scale-102 transition-all duration-200"
                />
                <img
                  src={assets.googleplus_icon}
                  alt=""
                  width={50}
                  className="cursor-pointer hover:scale-102 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loder />
      )}
      <Footer />
    </div>
  );
}

export default Blog;
