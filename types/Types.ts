export type Tweet = {
  id: string;
  user_id: string;
  content: string;
  image_path: string;
  image_url: string;
  created_at: string;
  profiles: {
    id: string;
    username: string;
    name: string;
    avatar_url: string;
  };
};
