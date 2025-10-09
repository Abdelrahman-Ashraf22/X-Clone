import Link from "next/link";
import React from "react";
import { BiBell, BiEnvelope } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaFeather, FaRegUser, FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";

export default function LeftSideBar() {
  return (
    <aside className="fixed left-0 top-0 w-[50px] lg:w-[400px] p-1 lg:p-4 h-screen lg:pl-30 ">
      {/* Top items */}
      <p className="mg-6 text-white">
        <FaXTwitter size={30} />
      </p>

      {/* Middle Items */}
      <div className="space-y-2 mt-4">
        <Link
          href="/next-env.d.ts"
          className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover"
        >
          <GoHomeFill size={20} />
          <span className="hidden lg:inline text-xl font-bold">Home</span>
        </Link>

        <Link
          href=""
          className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover"
        >
          <IoSearchOutline size={20} />
          <span className="hidden lg:inline text-xl font-bold">Explore</span>
        </Link>

        <Link
          href=""
          className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover"
        >
          <BiBell size={20} />
          <span className="hidden lg:inline text-xl font-bold">
            Notifications
          </span>
        </Link>

        <Link
          href=""
          className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover"
        >
          <BiEnvelope size={20} />
          <span className="hidden lg:inline text-xl font-bold">Messages</span>
        </Link>

        <Link
          href=""
          className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover"
        >
          <BsPeople size={20} />
          <span className="hidden lg:inline text-xl font-bold">
            Communities
          </span>
        </Link>

        <Link
          href=""
          className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover"
        >
          <FaXTwitter size={20} />
          <span className="hidden lg:inline text-xl font-bold">Premium</span>
        </Link>

        <Link
          href=""
          className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover"
        >
          <FaRegUser size={20} />
          <span className="hidden lg:inline text-xl font-bold">Profile</span>
        </Link>

        <Link
          href=""
          className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover"
        >
          <TbDotsCircleHorizontal size={20} />
          <span className="hidden lg:inline text-xl font-bold">More</span>
        </Link>
      </div>

      {/* down items */}
      <LogoutButton />
      <button className="bg-primary p-3 mt-3 rounded-full cursor-pointer text-white lg:hidden">
        <FaFeather size={20} />
      </button>

      <Profile />
    </aside>
  );
}
