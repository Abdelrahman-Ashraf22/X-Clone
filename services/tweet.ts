import { supabase } from "../lib/supabase";

export const createTweet = async (
  userId: string,
  content: string | null,
  tweetImage: File | null
) => {
  let imageURL: null | string = null;
  let imagePath: null | string = null;

  // hnadle image upload if there is an image
  if (tweetImage) {
    // create a unique path for the image
    const timeStamp = Date.now();
    const path = `${timeStamp}_${tweetImage.name}`;

    // upload image to supabase storage
    const { error: imgError } = await supabase.storage
      .from("tweet-images")
      .upload(path, tweetImage);

    //
    if (imgError) {
      console.error("Image upload error:", imgError.message);
      return;
    }

    // generate the publicURL from the image path uploaded
    const {
      data: { publicUrl },
    } = supabase.storage.from("tweet-images").getPublicUrl(path);
    imageURL = publicUrl;
    imagePath = path;
  }

  // save tweet to the database
  const { error: insertError } = await supabase.from("tweets").insert({
    user_id: userId,
    content: content ? content : null,
    image_path: imagePath,
    image_url: imageURL,
  });
  //
  if (insertError) {
    console.error("Insert error:", insertError.message);
    return;
  }
};

export const getTweets = async () => {
  const { data, error } = await supabase
    .from("tweets")
    .select(`*,profiles(*)`)
    .order("created_at", { ascending: false });
  if (error) {
    console.log("Error fetching tweets:", error.message);
    return;
  }
  return data;
};

export const deleteTweet = async (id: string, imagePath?: string) => {
  const { error: deleteError } = await supabase
    .from("tweets")
    .delete()
    .eq("id", id);

  if (deleteError) {
    console.log("delete Error", deleteError.message);
    return;
  }

  if (imagePath) {
    const { error: imageError } = await supabase.storage
      .from("tweet-images")
      .remove([imagePath]);
    if (imageError) {
      console.log("delete image error", imageError.message);
    }
  }
};
