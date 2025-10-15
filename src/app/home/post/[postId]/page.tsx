import Comments from "@/component/Comments";
import GoBackButton from "@/component/GoBackButton";
import ReplyPost from "@/component/ReplyPost";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { IoIosBookmark, IoIosStats } from "react-icons/io";
import { supabase } from "../../../../../lib/supabase";
import { Tweet } from "../../../../../types/Types";
import moment from "moment";
import TweetActions from "@/component/TweetActions";

const getTweet = async (id: string) => {
  const { data, error } = await supabase
    .from("tweets")
    .select("*, profiles(id,name,username,avatar_url)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return data;
};

// postId equals to the tweet id "file is Camel case"
export default async function page({ params }: { params: { postId: string } }) {
  const tweet: Tweet = await getTweet(params.postId);
  return (
    <div>
      <div className="flex justify-between items-center mb-3 px-4 py-2">
        <div className="text-white flex items-center gap-3">
          <GoBackButton />
        </div>

        <button className="border box-border rounded-full px-4 py-1 cursor-pointer text-white">
          Reply
        </button>
      </div>

      <div className="px-4 py-2 flex gap-3 border-b border-border">
        <Image
          src={tweet?.profiles?.avatar_url ?? "/default-avatar.png"}
          alt="profile-pic"
          width={100}
          height={100}
          className="w-10 h-10 object-cover rounded-full shrink-0"
        />
        <div className="w-full">
          <div className="flex justify-between gap-1 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold">
                {tweet?.profiles?.name ?? "Unknown"}
              </span>
              <span className="text-secondary-text">
                @{tweet?.profiles?.username ?? "unknown"}
              </span>
              <span className="text-secondary-text">
                {moment(tweet.created_at).fromNow()}
              </span>
            </div>
            <BsThreeDots className="text-white cursor-pointer" />
          </div>

          {tweet.content && (
            <div className="text-white my-2 block">{tweet.content}</div>
          )}

          {tweet.image_url && (
            <Link href={`/home/post/${tweet.id}`}>
              <Image
                src={tweet.image_url}
                alt="post-img"
                width={1800}
                height={1800}
                className="h-70 md:h-130 w-full rounded-lg border border-border object-cover"
              />
            </Link>
          )}
          <TweetActions
            creatorId={tweet.profiles.id}
            tweetId={tweet.id}
            imagePath={tweet.image_path}
            isTweetPostViewPage={true}
          />
          {/* 
          <div className="flex justify-between my-4   ">
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer  ">
              <FaRegComment />
              <span className="text-sm">1.1K</span>
            </div>

            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FiRepeat />
              <span className="text-sm">4.5K</span>
            </div>

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
          </div> */}
        </div>
      </div>
      <ReplyPost tweetId={tweet.id} />

      <Comments tweetId={tweet.id} />
    </div>
  );
}
