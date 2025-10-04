import Image from "next/image";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function RightSideBar() {
  return (
    <aside className="fixed right-0 top-0 w-[450px] p-5 h-screen pr-20 hidden xl:block ">
      <div className="text-white flex items-center gap-2 border border-border p-2 rounded-full">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="Search"
          className="outline-0 w-full"
        />
      </div>
      <div className="border border-border p-4 text-white mt-5 rounded-lg">
        <h3 className="font-bold text-2xl mb-4">Subscribe to Premium</h3>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          revenue.
        </p>
        <button className="mt-4 bg-primary text-white py-2 px-5 font-semibold cursor-pointer rounded-full hover:bg-sky-700 transition  duration-200">
          Subscribe
        </button>
      </div>

      <div className="border border-border p-4 text-white mt-5 rounded-lg ">
        <h3 className="mb-4 text-2xl font-bold">Who to follow</h3>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 items-center ">
            <Image
              src="/images/image1.jpg"
              alt="profile-pic"
              width={800}
              height={800}
              className="w-10 h-10 object-cover rounded-full "
            />
            <div className="text-white">
              <p>Shehab A.</p>
              <p className="text-secondary-text font-light">@Shehab</p>
            </div>
          </div>

          <button className="bg-white text-black py-2 px-5 font-semibold cursor-pointer rounded-full">
            Follow
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 items-center ">
            <Image
              src="/images/image2.jpg"
              alt="profile-pic"
              width={800}
              height={800}
              className="w-10 h-10 object-cover rounded-full "
            />
            <div className="text-white">
              <p className="">Morsi O.</p>
              <p className="text-secondary-text font-light">@Morsi</p>
            </div>
          </div>

          <button className="bg-white text-black py-2 px-5 font-semibold cursor-pointer rounded-full">
            Follow
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 items-center ">
            <Image
              src="/images/image3.jpg"
              alt="profile-pic"
              width={800}
              height={800}
              className="w-10 h-10 object-cover rounded-full "
            />
            <div className="text-white">
              <p className="">Omar A.</p>
              <p className="text-secondary-text font-light">@Omar</p>
            </div>
          </div>

          <button className="bg-white text-black py-2 px-5 font-semibold cursor-pointer rounded-full">
            Follow
          </button>
        </div>
      </div>
    </aside>
  );
}
