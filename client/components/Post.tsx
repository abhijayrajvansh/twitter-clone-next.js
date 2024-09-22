'use client'

import { GrGallery } from "react-icons/gr";
import { MdOutlineGifBox } from "react-icons/md";
import { CgOptions } from "react-icons/cg";
import { useState } from "react";

const Post = () => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center space-x-4 p-3 h-full w-[621px] border-gray-700 border-b mt-14 border-r">
      <img
        className="h-10 rounded-full"
        src="/images/sample-pfp.jpeg"
        alt="userpp"
      />
      <input
        className={`bg-transparent border-2 rounded-full w-full px-3 py-2 ${isFocused ? 'outline-none border-primary' : 'border-gray-600'}`}
        type="text"
        placeholder="what is happening?!"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className="text-xl flex space-x-4 text-primary">
        <GrGallery />
        <MdOutlineGifBox />
        <CgOptions />
      </div>
    </div>
  );
};

export default Post;
