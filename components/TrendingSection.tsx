'use client'

import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import HappeningComponent from "./HappeningComponent";
import { MdMoreHoriz } from "react-icons/md";
import Suggestions from "./Suggestions";

const TrendingSection = () => {

  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <section className="flex flex-col fixed ml-[900px] w-full max-w-[375px] px-4 py-1">
      
      <div className="flex w-full items-center relative focus-within:text-primary">
        <IoSearch className={`text-xl ${isInputFocused ? 'text-primary' : 'text-faded'} absolute left-5`} />
        <input className={`text-md py-2.5 px-14 w-full rounded-full ${isInputFocused ? 'bg-black border border-primary outline-none':'bg-[#222529]'}`}
          placeholder="Search" 
          // onFocus: This event handler is triggered when an element gains focus, meaning when a user clicks or tabs into the element.
          // onBlur: This event handler is triggered when an element loses focus, meaning when a user clicks or tabs out of the element.
          onFocus={() => setIsInputFocused(true)} 
          onBlur={() => setIsInputFocused(false)}/>
      </div>

      <div className="mt-4 bg-[#16181C] px-4 py-3 rounded-2xl">
        <h2>Subscribe to Premium</h2>
        <p className="text-sm py-2">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className="font-bold bg-primary hover:bg-opacity-80 px-4 py-1.5 mt-1.5 rounded-full">Subscribe</button>
      </div>

      
      <div className="mt-4 bg-[#16181C] pt-3 rounded-2xl">

        <h2 className="px-4">What's happening</h2>
        <div className="hover:bg-white/10 transition duration-200 px-4 flex w-full items-start justify-between py-5">
          <div>
            <p className="font-bold text-md">Best software company, SF</p>
            <p className="text-sm text-faded">Technology · LIVE</p>
          </div>
          <img className="h-16 rounded-xl" src="./images/rajvansh.png" alt="rajvansh" />
        </div>
          
        <HappeningComponent genre="Technology" headline="rajvanshtechnologies" posts="21M"/>
        <HappeningComponent genre="Entertainment" headline="#spiderman" posts="255k"/>
        <HappeningComponent genre="Technology" headline="bitcoin" posts="4M"/>

        <p className="px-4 py-3 text-primary cursor-pointer hover:bg-white/5 transition duration-200 rounded-b-2xl">see more</p>
      </div>

      

      <div className="mt-4 bg-[#16181C] pt-3 rounded-2xl">
        <h2 className="px-4">Who to follow</h2>

        <Suggestions userpfp={'elonpfp.png'} profileName="Elon Musk" userName="elonmusk"/>

        {/* to create diffrenet user profile? */}
        <Suggestions userpfp={'elonpfp.png'} profileName="Elon Musk" userName="elonmusk"/>

        <Suggestions userpfp={'elonpfp.png'} profileName="Elon Musk" userName="elonmusk"/>

        <p className="px-4 py-3 text-primary cursor-pointer hover:bg-white/5 transition duration-200 rounded-b-2xl">see more</p>
      </div>
    </section>
  )
}

export default TrendingSection;