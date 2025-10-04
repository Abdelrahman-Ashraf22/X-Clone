import CreatePost from "@/component/CreatePost";
import Posts from "@/component/Posts";
import React from "react";

export default function page() {
  return (
    <div className="">
      <div className="border border-border h-14 grid grid-cols-2 text-white">
        <button className="cursor-pointer font-semibold hover:bg-hover">
          For You
        </button>

        <button className="cursor-pointer font-semibold hover:bg-hover">
          Following
        </button>
      </div>

      <CreatePost />

      <Posts />
    </div>
  );
}
