'use client'

import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const SearchComponent = () => {

  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="flex flex-col fixed ml-[900px] w-full max-w-[375px] px-4 py-1 z-10 bg-black pb-2">
      <div className="flex w-full items-center relative focus-within:text-primary">
          <IoSearch className={`text-xl ${isInputFocused ? 'text-primary' : 'text-faded'} absolute left-5`} />
          <input className={`text-md py-2.5 px-14 w-full rounded-full ${isInputFocused ? 'bg-black border border-primary outline-none':'bg-[#222529]'}`}
            placeholder="Search" 
            // onFocus: This event handler is triggered when an element gains focus, meaning when a user clicks or tabs into the element.
            // onBlur: This event handler is triggered when an element loses focus, meaning when a user clicks or tabs out of the element.
            onFocus={() => setIsInputFocused(true)} 
            onBlur={() => setIsInputFocused(false)}/>
      </div>
    </div>
  )
}

export default SearchComponent;