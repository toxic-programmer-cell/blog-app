import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    setComments(comments_data);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="bg-primary/6 flex-1 p-4 md:p-10">
      {/* // header */}
      <div className="flex justify-between items-center max-w-3xl">
        <h1>Comments</h1>
        {/* <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-sm ${
              filter === "Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Approved
          </button>

          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-sm ${
              filter === "Not Approved" ? "text-primary" : "text-gray-700"
            }`}
          >
            Not Approved
          </button>
        </div> */}

        <div className="relative flex gap-3 bg-gray-100 p-1 rounded-full w-fit">
          {/* Sliding Indicator */}
          <span
            className={`absolute top-1 bottom-1 left-1 w-[110px] rounded-full bg-primary transition-all duration-300 ease-in-out
      ${filter === "Approved" ? "translate-x-0" : "translate-x-[116px]"}`}
          />

          <button
            onClick={() => setFilter("Approved")}
            className={`relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300
      ${filter === "Approved" ? "text-white" : "text-gray-600"}`}
          >
            Approved
          </button>

          <button
            onClick={() => setFilter("Not Approved")}
            className={`relative z-10 px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-300
      ${filter === "Not Approved" ? "text-white" : "text-gray-600"}`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="Relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 text-left uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Blog Title & comment
              </th>
              <th scope="col" className="px-6 py-3 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {comments
              .filter((comment) => {
                if (filter === "Approved") return comment.isApproved === true;
                return comment.isApproved === false;
              })
              .map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  fetchComments={fetchComments}
                  index={index + 1}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
