// feed imports
import { GrGallery } from "react-icons/gr";
import { MdOutlineGifBox } from "react-icons/md";
import { CgOptions } from "react-icons/cg";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdMoreHoriz } from "react-icons/md";

const Feed = () => {
  return (
    <main className="ml-[275px] flex flex-col w-[620px] h-full min-h-screen border-gray-700 border-l border-r">
      {/* view tab */}
      <div className="bg-black text-center font-bold border-gray-700 border-b border-l border-r pt-4 pb-2 fixed w-[620px]">Following
        <div className="border-primary border-2 w-[14%] ml-[43%] rounded-full mt-2"></div>
      </div>
      {/* margin divider */}
      <div className="mt-[60px]"></div>
      
      <div className="flex items-center space-x-4 p-3 h-full w-full border-gray-700 border-b">
        <img className="h-10 rounded-full" src="./images/elonpfp.png" alt="userpp" />
        <input className="bg-transparent border-2 border-gray-700 rounded-full w-full px-3 py-2" type="text" placeholder="what is happening?!"/>
        <div className="text-xl flex space-x-4 text-primary">
          <GrGallery />
          <MdOutlineGifBox />
          <CgOptions />
        </div>
      </div>

      {/* tweet post section */}
      {
        Array.from({length: 1}).map((_, i) => (  
          <div key={i}>
          
            <div className="flex items-start h-full w-full p-4 space-x-2 border-gray-700 border-b">
              <img className="h-10 w-10 rounded-full" src="./images/elonpfp.png" alt="profilePfp" />
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <p className="font-bold">Elon Musk</p>
                    <RiVerifiedBadgeFill className="text-primary text-lg"/>
                    <p className="text-faded">@elonmusk · Mar 4</p>
                  </div>
                  <MdMoreHoriz className="text-2xl text-faded" />
                </div>
                <p>let him cook, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur minus qui officia blanditiis ipsam illo nisi esse.</p>
                <img className="rounded-2xl mt-3  border-2 border-gray-700" src="./images/elonpfp.png" alt="tweetImage" />
              </div>
            </div>
          
          </div>
        ))
      }

    </main>
  )
}

export default Feed;