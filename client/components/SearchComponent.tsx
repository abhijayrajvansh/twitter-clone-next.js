'use client'

import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const SearchComponent = () => {

  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-[375px] px-4 py-1 z-10 sticky top-0 bg-black pb-2 mt-1">
      <div className="flex w-full items-center relative focus-within:text-primary">
          <IoSearch className={`text-xl ${isInputFocused ? 'text-primary' : 'text-faded'} absolute left-5`} />
          <input className={`text-md py-2.5 px-14 w-full rounded-full ${isInputFocused ? 'bg-black border border-primary outline-none':'bg-[#222529]'}`}
            placeholder="Search" 
            
            onFocus={() => setIsInputFocused(true)} 
            onBlur={() => setIsInputFocused(false)}/>
      </div>
    </div>
  )
}

export default SearchComponent;