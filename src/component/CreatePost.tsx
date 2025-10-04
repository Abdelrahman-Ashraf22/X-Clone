"use client";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbPhoto } from "react-icons/tb";

export default function CreatePost() {
  //showing the text area value
  const [post, setPost] = useState("");
  // the img preview state
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  //  showing and hiding the emoji picker
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  // if there is no text and no image then the post button will be disabled
  const isDisabled = post.trim() === "" && !imagePreview;
  // create a ref for the file input
  const fileRef = useRef<HTMLInputElement | null>(null);

  // function to handle the file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // function to remove the selected image
  const removeImage = () => {
    setImagePreview(null);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  // function to handle the emoji click
  const onEmojiClick = (emojiData: EmojiClickData) => {
    setPost((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="flex gap-4 p-4 border border-border">
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
          value={post}
          onChange={(e) => setPost(e.target.value)}
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
              className="absolute top-5 right-5 bg-gray-600 w-10 h-10 text-2xl rounded-full opacity-50 cursor-pointer flex items-center justify-center"
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
            <button className="text-black bg-white py-2 px-5 font-semibold cursor-pointer rounded-full">
              Post
            </button>
          )}
          {showEmojiPicker && (
            <div className="fixed z-10 top-50 left-1/2 w-[90%] max-w-2xl -translate-x-1/2">
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
