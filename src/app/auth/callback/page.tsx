// setup page after oauth callback

"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

export default function Page() {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<null | User>(null);

  const router = useRouter();
  const submitUserProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !username || !image) {
      setMessage("All fields are required");
      return;
    }

    // upload image to supabase storage
    const timeStamp = Date.now();
    const imagePath = `${timeStamp}_${image.name}`;

    const { error: imageError } = await supabase.storage
      .from("avatars")
      .upload(imagePath, image);
    if (imageError) {
      setMessage(imageError.message);
      return;
    }

    // generaate the publicURL from the image path uploaded
    const {
      data: { publicUrl },
    } = supabase.storage.from("avatars").getPublicUrl(imagePath);

    // insert data to the profile table
    const { error: insertError } = await supabase.from("profiles").insert({
      username,
      email: user?.email,
      id: user?.id,
      name,
      avatar_url: publicUrl,
    });
    if (insertError) {
      console.error("Insert error:", insertError); // Add this

      setMessage(insertError.message);
      return;
    }

    setMessage("Profile created successfully!");
    setTimeout(() => {
      router.replace("/home");
    }, 2000);
  };

  useEffect(() => {
    const handleAuth = async () => {
      const {
        error: userError,
        data: { user },
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace("/auth/signup");
        return;
      }

      setUser(user);

      // check if user profile exists
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

      if (profileError) {
        setMessage("Error checking profile. Please try again.");
        return;
      }

      if (profile) {
        router.replace("/home");
      }
    };
    handleAuth();
  }, [router]);
  return (
    <div className="h-screen flex items-center justify-center bg-amber-950">
      <div className=" max-w-[300px] w-[95%] py-12 rounded-lg px-6 bg-card flex flex-col bg-background mb-12">
        <h2 className="font-bold text-3xl text-primary-text mb-12">
          Set up profile
        </h2>
        {message && (
          <p className="bg-primary py-1 mb-4 font-semibold text-center">
            {message}
          </p>
        )}
        <form onSubmit={submitUserProfile}>
          <input
            type="text"
            placeholder="Full name"
            className="w-full mb-6 bg-background outline-0 rounded-md  p-4 placeholder-secondary-text border border-border text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full bg-background outline-0 rounded-md  p-4 placeholder-secondary-text border border-border text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label
            className="text-white py-2 block"
            htmlFor="avatar"
          >
            Profile Pic
          </label>
          <input
            id="avatar"
            type="file"
            accept="images/*"
            placeholder="avatar pic"
            className="w-full bg-background outline-0 rounded-md  p-4 placeholder-secondary-text border border-border text-white"
            onChange={(e) => {
              const files = e.target.files;
              if (!files) return;
              const file = files[0];
              if (!file.type.startsWith("image/")) {
                setMessage("Please select a valid image file.");
                return;
              }
              if (file.size > 5 * 1024 * 1024) {
                // 5MB limit
                setMessage("Image too large (max 5MB).");
                return;
              }
              setImage(file);
            }}
          />

          <button className="text-black w-full mt-8 rounded-full h-10  flex justify-center items-center gap-2 cursor-pointer  hover:bg-gray-200 font-semibold bg-white">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
