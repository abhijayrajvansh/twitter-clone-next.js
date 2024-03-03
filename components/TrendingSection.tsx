'use client'

import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const TrendingSection = () => {

  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <section className="flex flex-col fixed ml-[900px] w-full max-w-[375px] px-5 py-1">
      
      <div className="flex w-full items-center relative focus-within:text-primary">
        <IoSearch className={`text-xl ${isInputFocused ? 'text-primary' : 'text-faded'} absolute left-5`} />
        <input className={`text-md py-2.5 px-14 w-full rounded-full ${isInputFocused ? 'bg-black border border-primary outline-none':'bg-[#222529]'}`}
          placeholder="Search" 
          // onFocus: This event handler is triggered when an element gains focus, meaning when a user clicks or tabs into the element.
          // onBlur: This event handler is triggered when an element loses focus, meaning when a user clicks or tabs out of the element.
          onFocus={() => setIsInputFocused(true)} 
          onBlur={() => setIsInputFocused(false)}/>
      </div>
      
      
      <div className="mt-3">subscribe to premium</div>
      <div>what's happening</div>
      <div>who to follow</div>
      <p>important links</p>
    </section>
  )
}

export default TrendingSection;