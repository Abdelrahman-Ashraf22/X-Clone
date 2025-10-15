"use client";

import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { FiRepeat, FiTrash } from "react-icons/fi";
import { IoIosBookmark, IoIosStats } from "react-icons/io";
import { useUserSession } from "../../hooks/useUserSession";
import { useDeleteTweet } from "../../hooks/useTweet";
import { useRouter } from "next/navigation";

type TweetActionProp = {
  creatorId: string;
  tweetId: string;
  imagePath: string;
  isTweetPostViewPage: boolean;
};

export default function TweetActions({
  creatorId,
  tweetId,
  imagePath,
  isTweetPostViewPage,
}: TweetActionProp) {
  const { session } = useUserSession();
  const userId = session?.user.id;
  const { mutate } = useDeleteTweet();
  const router = useRouter();

  const handleDeleteTweet = () => {
    mutate(
      {
        tweetId,
        imagePath: imagePath || undefined,
      },
      {
        onSuccess: () => {
          if (isTweetPostViewPage) {
            router.replace("/home");
          }
        },
      }
    );
  };

  return (
    <div className="flex justify-between my-4">
      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
        <FaRegComment />
        <span className="text-sm">1.1K</span>
      </div>

      {creatorId === userId ? (
        <button
          onClick={handleDeleteTweet}
          className="text-red-700 flex items-center gap-1 cursor-pointer"
        >
          <FiTrash />
        </button>
      ) : (
        <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <FiRepeat />
          <span className="text-sm">4.5K</span>
        </div>
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
