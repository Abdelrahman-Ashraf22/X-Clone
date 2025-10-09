"use client";
import React from "react";
import { useUserSession } from "../../hooks/useUserSession";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function LogoutButton() {
  const { session } = useUserSession();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Error logging out:", error);
      return;
    }
  };

  return (
    <>
      {session ? (
        <button
          onClick={handleLogout}
          className="hidden lg:block bg-white text-black p-3 w-full mt-3 font-bold rounded-full cursor-pointer hover:bg-gray-200"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/"
          className="hidden lg:block bg-white text-center text-black p-3 w-full mt-3 font-bold rounded-full cursor-pointer hover:bg-gray-200"
        >
          Log In
        </Link>
      )}
    </>
  );
}
