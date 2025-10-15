"use client";
import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { FiRepeat, FiTrash } from "react-icons/fi";
import { IoIosBookmark, IoIosStats } from "react-icons/io";
import { useUserSession } from "../../hooks/useUserSession";
import { useDeleteComment } from "../../hooks/useComment";

type CommentActionsProps = {
  creatorId: string;
  tweetId: string;
  commentId: string;
};
export default function CommentAction({
  creatorId,
  tweetId,
  commentId,
}: CommentActionsProps) {
  const { session } = useUserSession();
  const userId = session?.user.id;

  const { mutate } = useDeleteComment();

  const handleDelete = () => {
    mutate({
      tweetId,
      commentId,
    });
  };

  return (
    <div className="flex justify-between my-4   ">
      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer  ">
        <FaRegComment />
        <span className="text-sm">1.1K</span>
      </div>

      {userId === creatorId && (
        <button
          onClick={handleDelete}
          className="text-red-700 flex items-center gap-1 hover:text-blue-400 cursor-pointer"
        >
          <FiTrash />
          {/* <span className="text-sm">4.5K</span> */}
        </button>
      )}

      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
        <FaRegHeart />
        <span className="text-sm">2.4K</span>
      </div>

      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
        <IoIosStats />
        <span className="text-sm">10K</span>
      </div>

      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
        <IoIosBookmark size={20} />
      </div>
    </div>
  );
}
