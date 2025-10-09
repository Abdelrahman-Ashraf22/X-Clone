"use client";
import Image from "next/image";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { useGetUser } from "../../hooks/useGetUser";

export default function Profile() {
  const { session, profile, loading } = useGetUser();
  if (!session) return null;
  if (!profile) return null;
  if (loading) return <h2 className="text-2xl  text-white">Loading...</h2>;

  return (
    <div>
      <div className="mt-10 text-white flex justify-between items-center">
        <div className="flex items-center gap-2 ">
          <Image
            src={profile?.avatar_url || "/default-avatar.png"}
            alt="profile-pic"
            width={500}
            height={500}
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="hidden lg:block">
            <p className="font-semibold">{profile?.name}</p>
            <p className="text-secondary-text font-light">
              @{profile?.username}
            </p>
          </div>
        </div>

        <HiDotsHorizontal className="hidden lg:block" />
      </div>
    </div>
  );
}
