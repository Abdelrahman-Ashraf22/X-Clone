"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

import { useGetTweets } from "../../hooks/useTweet";
import { Tweet } from "../../types/Types";
import moment from "moment";
import TweetActions from "./TweetActions";

export default function Posts() {
  const { isLoading, isError, error, data: tweets } = useGetTweets();

  if (isLoading) return <div className="text-wh text-xl">Loading...</div>;
  if (isError) return <div className="text-wh text-xl">{error.message}</div>;
  return (
    <div>
      {tweets?.map((tweet: Tweet) => {
        return (
          <div
            key={tweet.id}
            className="px-4 py-2 flex gap-3 border-b border-border"
          >
            <Image
              src={tweet.profiles.avatar_url}
              alt="profile-pic"
              width={100}
              height={100}
              className="w-10 h-10 object-cover rounded-full shrink-0"
            />
            <div className="w-full">
              <div className="flex justify-between gap-1 ">
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-white font-bold">
                    {tweet.profiles.name}
                  </span>
                  <span className="text-secondary-text">
                    @{tweet.profiles.username}
                  </span>
                  <span className="text-secondary-text">
                    {moment(tweet.created_at).fromNow()}
                  </span>
                </div>
                <BsThreeDots className="text-white cursor-pointer" />
              </div>
              {tweet.content && (
                <Link
                  href={`/home/post/${tweet.id}`}
                  className="text-white my-2 block"
                >
                  {tweet.content}
                </Link>
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
                isTweetPostViewPage={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
