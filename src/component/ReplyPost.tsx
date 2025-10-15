"use client";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbPhoto } from "react-icons/tb";
import { useUserSession } from "../../hooks/useUserSession";
import { useCreateComment } from "../../hooks/useComment";

export default function ReplyPost({ tweetId }: { tweetId: string }) {
  const [replyPost, setReplyPost] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const isDisabled = replyPost.trim() === "" && !imagePreview;
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { mutate, isPending } = useCreateComment();

  const { session } = useUserSession();
  const userId = session?.user.id;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setReplyPost((prev) => prev + emojiData.emoji);
  };

  const PostComment = () => {
    if (!replyPost.trim()) return;
    if (!userId) return;
    mutate(
      {
        userId,
        tweetId,
        content: replyPost,
      },
      {
        onSuccess: () => {
          setReplyPost("");
        },
      }
    );
  };

  if (!session) return null;
  return (
    <div className={`flex gap-4 p-4 border border-border ${isPending ? "opacity-30":"" }`}>
      <Image
        src="/images/profile.jpg"
        alt="profile-pic"
        width={500}
        height={500}
        className="w-10 h-10 object-cover rounded-full shrink-0"
      />

      <div className="w-full">
        <textarea
          className="w-full placeholder:text-secondary-text outline-0 text-white text-xl resize-none"
          placeholder="what's happening?"
          value={replyPost}
          onChange={(e) => setReplyPost(e.target.value)}
        ></textarea>

        {imagePreview && (
          <div className="h-60 md:h-100 rounded-lg overflow-hidden border border-border md-10 relative">
            <Image
              src={imagePreview}
              alt="preview-image"
              className="h-full w-full object-cover"
              width={500}
              height={500}
            />
            <button
              className="absolute top-5 right-5 bg-gray-600 w-10 h-10 text-2xl rounded-full opacity-50 cursor-pointer flex items-center
          justify-center"
              onClick={removeImage}
            >
              <RxCross2 />
            </button>
          </div>
        )}

        <div className="flex justify-between items-center py-4 border-t border-border">
          <div className="flex gap-3">
            <div
              className="text-primary cursor-pointer"
              onClick={() => fileRef.current?.click()}
            >
              <TbPhoto size={20} />
            </div>

            <div
              className="text-primary cursor-pointer"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <FaRegFaceSmile size={20} />
            </div>

            <div className="text-primary cursor-pointer">
              <IoLocationOutline size={20} />
            </div>

            <div className="text-primary cursor-pointer">
              <RiCalendarScheduleLine size={20} />
            </div>
          </div>
          {isDisabled ? (
            <button className="text-black bg-secondary-text py-2 px-5 font-semibold cursor-pointer rounded-full">
              Post
            </button>
          ) : (
            <button
              onClick={PostComment}
              className="text-black bg-white py-2 px-5 font-semibold cursor-pointer rounded-full"
            >
              Post
            </button>
          )}
          {showEmojiPicker && (
            <div className="fixed z-10 top-10 left-1/2 w-[90%] max-w-2xl -translate-x-1/2">
              <EmojiPicker
                theme={Theme.AUTO}
                style={{ width: "100%" }}
                onEmojiClick={onEmojiClick}
              />
            </div>
          )}
        </div>

        <input
          type="file"
          ref={fileRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
