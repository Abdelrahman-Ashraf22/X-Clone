"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { signUpUser } from "../../../../services/auth";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const signUp = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    const result = await signUpUser(email, password);
    if (result?.error) {
      setMessage(result.error);
    } else {
      setMessage(
        "Sign up successful! Please check your email to confirm your account."
      );
      setTimeout(() => {
        router.replace("/auth/callback");
      }, 2000);
    }
  };

  // redirect to callback if user is already logged in
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: session }) => {
  //     if (session) {
  //       router.replace("/auth/callback");
  //     }
  //   });
  // }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-amber-950">
      <div className=" max-w-[300px] w-[95%] py-12 rounded-lg px-6 bg-card flex flex-col bg-background mb-12">
        <h2 className="font-bold text-3xl text-primary-text mb-12">
          Sign up to X
        </h2>
        {message && (
          <p className="bg-primary py-1 mb-4 font-semibold text-center">
            {message}
          </p>
        )}
        <form onSubmit={signUp}>
          <input
            type="text"
            placeholder="Email"
            className="w-full mb-6 bg-background outline-0 rounded-md  p-4 placeholder-secondary-text border border-border text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-background outline-0 rounded-md  p-4 placeholder-secondary-text border border-border text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="text-black w-full mt-8 rounded-full h-10  flex justify-center items-center gap-2 cursor-pointer  hover:bg-gray-200 font-semibold bg-white">
            Continue
          </button>
        </form>
        <div className="text-secondary-text mt-8">
          <span className="mr-1">Already have an account?</span>

          <Link
            href="/"
            className="text-primary hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
