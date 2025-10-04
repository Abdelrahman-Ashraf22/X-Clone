import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { IoIosBookmark, IoIosStats } from "react-icons/io";

export default function Posts() {
  return (
    <div>
      {/* first post */}
      <div className="px-4 py-2 flex gap-3 border-b border-border">
        <Image
          src="/images/profile.jpg"
          alt="profile-pic"
          width={100}
          height={100}
          className="w-10 h-10 object-cover rounded-full shrink-0"
        />
        <div className="w-full">
          <div className="flex justify-between gap-1 ">
            <div className="flex items-center gap-1 text-sm">
              <span className="text-white font-bold">Omar Khaled</span>
              <span className="text-secondary-text">@omar</span>
              <span className="text-secondary-text">3h</span>
            </div>
            <BsThreeDots className="text-white cursor-pointer" />
          </div>
          <Link
            href="/home/post/1"
            className="text-white my-2 block"
          >
            Stars can&apos;t shine without darkness.
          </Link>

          <Link href="/home/post/1">
            <Image
              src="/images/post1.jpg"
              alt="post-img"
              width={1800}
              height={1800}
              className="h-70 md:h-130 w-full rounded-lg border border-border object-cover"
            />
          </Link>

          <div className="flex justify-between my-4">
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
          </div>
        </div>
      </div>

      {/* second post */}
      <div className="px-4 py-2 flex gap-3 border-b border-border">
        <Image
          src="/images/profile.jpg"
          alt="profile-pic"
          width={100}
          height={100}
          className="w-10 h-10 object-cover rounded-full shrink-0"
        />
        <div className="w-full">
          <div className="flex justify-between gap-1 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold">Omar Khaled</span>
              <span className="text-secondary-text">@omar</span>
              <span className="text-secondary-text">3h</span>
            </div>
            <BsThreeDots className="text-white cursor-pointer" />
          </div>
          <Link
            href=""
            className="text-white my-2 block"
          >
            Stars can&apos;t shine without darkness.
          </Link>

          <Link href="">
            <Image
              src="/images/post1.jpg"
              alt="post-img"
              width={1800}
              height={1800}
              className="h-70 md:h-130 w-full rounded-lg border border-border object-cover"
            />
          </Link>

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
          </div>
        </div>
      </div>

      {/* third post */}
      <div className="px-4 py-2 flex gap-3 border-b border-border">
        <Image
          src="/images/profile.jpg"
          alt="profile-pic"
          width={100}
          height={100}
          className="w-10 h-10 object-cover rounded-full shrink-0"
        />
        <div className="w-full">
          <div className="flex justify-between gap-1 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold">Omar Khaled</span>
              <span className="text-secondary-text">@omar</span>
              <span className="text-secondary-text">3h</span>
            </div>
            <BsThreeDots className="text-white cursor-pointer" />
          </div>
          <Link
            href=""
            className="text-white my-2 block"
          >
            Stars can&apos;t shine without darkness.
          </Link>

          <Link href="">
            <Image
              src="/images/post1.jpg"
              alt="post-img"
              width={1800}
              height={1800}
              className="h-70 md:h-130 w-full rounded-lg border border-border object-cover"
            />
          </Link>

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
          </div>
        </div>
      </div>
    </div>
  );
}
