import Post from './Post';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { LuShare } from "react-icons/lu";

const Feed = () => {
  return (
    <main className="ml-[275px] flex flex-col w-[621px] h-full min-h-screen border-gray-700 border-l border-r">
      {/* view tab */}
      <div className="backdrop-blur-xl bg-black bg-opacity-70 text-center font-bold border-gray-700 border-b border-l border-r pt-2 pb-2 fixed w-[620px]">
        Following
        <div className="border-primary border-2 w-[14%] ml-[43%] rounded-full mt-2">
        </div>
      </div>
      
      <Post />

      {/* main timeline */}
      {
        Array.from({length:12}).map((_, i) => (  
          <div key={i}>
          
            <div className="flex items-start h-full w-[620px] px-4 pt-7 space-x-2 border-gray-700 border-b gap-2">


              <img className="h-10 w-10 rounded-full" src="./images/elonpfp.png" alt="profilePfp" />
              <div className="flex flex-col">
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2 items-center relative">
                    
                    
                    {true &&
                      <p className='flex items-center justify-between w-fit absolute bottom-6 text-faded font-bold -ml-6 gap-3'>
                      <FaRetweet /> Elon Musk reposted
                    </p>}

                    <p className="font-bold ml-2">Elon Musk</p>
                    <RiVerifiedBadgeFill className="text-primary text-lg"/>
                    <p className="text-faded">@elonmusk · Mar 4</p>
                  </div>
                  <MdMoreHoriz className="text-2xl text-faded" />
                </div>
                
                <p className='ml-2'>let him cook, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consequuntur minus qui officia blanditiis ipsam illo nisi esse.</p>
                
                {true && 
                <img className="rounded-2xl mt-3  border-2 border-gray-700" src="./images/elonpfp.png" alt="tweetImage" />}
                
                <div className="flex item justify-between py-1 text-md text-faded">
                  <div className="interactiveButton hover:text-primary hover:bg-primary/20">
                    <FaRegComment />
                  </div>
                  <div className="interactiveButton hover:text-green-500 hover:bg-green-500/20">
                    <FaRetweet />
                  </div>
                  <div className="interactiveButton hover:text-red-500 hover:bg-red-500/20">
                    <FaRegHeart />
                  </div>
                  <div className="interactiveButton hover:text-primary hover:bg-primary/20">
                    <FaRegBookmark />
                  </div>
                  <div className="interactiveButton hover:text-primary hover:bg-primary/20">
                    <LuShare />
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        ))
      }

    </main>
  )
}

export default Feed;