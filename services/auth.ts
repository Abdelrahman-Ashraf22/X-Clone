import { supabase } from "../lib/supabase";

export const signUpUser = async (email: string, password: string) => {
  try {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.log("Error signing up:", error.message);
      return { error: error.message };
    }
  } catch (error) {
    console.log("Unexpected error occured", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.log("Error signing up:", error.message);
      return { error: error.message };
    }
  } catch (error) {
    console.log("Unexpected error occured", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
};
