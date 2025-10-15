import { supabase } from "../lib/supabase";

// create a comment and send it to supabase
export const createComment = async (
  userId: string,
  tweetId: string,
  content: string
) => {
  const { error: insertCommentError } = await supabase.from("comments").insert({
    user_id: userId,
    tweet_id: tweetId,
    content,
  });
  if (insertCommentError) {
    console.log("commentError", insertCommentError.message);
    return;
  }
  return true;
};

// getting the comments from supabase
export const getComments = async (tweetId: string) => {
  const { data, error } = await supabase
    .from("comments")
    .select("*,profiles (id,name,username,avatar_url)")
    .eq("tweet_id", tweetId)
    .order("created_at", { ascending: false });

  if (error) {
    console.log("fetchCommentsError:", error.message);
    return;
  }

  return data ?? [];
};
