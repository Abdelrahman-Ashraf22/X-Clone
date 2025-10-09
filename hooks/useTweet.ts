import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTweet } from "../services/tweet";

export const usePostTweet = () => {
  //
  const queryClinet = useQueryClient();

  //
  return useMutation({
    mutationFn: ({
      userId,
      content,
      tweetImage,
    }: {
      userId: string;
      content: string | null;
      tweetImage: File | null;
    }) => createTweet(userId, content, tweetImage),
    //
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["tweets"] });
    },
  });
};
