import NavigationBar from "@/components/NavigationBar";

// feed imports
import { GrGallery } from "react-icons/gr";
import { MdOutlineGifBox } from "react-icons/md";
import { CgOptions } from "react-icons/cg";

const page = () => {
  return (
    <div className="layoutContainer">
      <NavigationBar />
      
      {/* feed section starts */}
      <main className="ml-[275px] flex flex-col w-[620px] h-full min-h-screen border-gray-700 border-l border-r">
        {/* view tab */}
        <div className="bg-black hover:bg-white/10 text-center font-bold border-gray-700 border-b border-l border-r pt-4 pb-2 fixed w-[620px]">Following
          <div className="border-primary border-2 w-[14%] ml-[43%] rounded-full mt-2"></div>
        </div>
        {/* margin divider */}
        <div className="mt-[60px]"></div>
        
        <div className="flex py-3 items-center space-x-4 px-3 h-full w-full border-gray-700 border-b">
          <img className="h-10 rounded-full" src="./images/elonpfp.png" alt="userpp" />
          <input className="bg-transparent border-2 border-gray-700 rounded-full w-full px-3 py-2" type="text" placeholder="what is happening?!"/>
          <div className="text-xl flex space-x-4 text-primary">
            <GrGallery />
            <MdOutlineGifBox />
            <CgOptions />
          </div>
        </div>

        {/* tweet post section */}

        

      </main>
      {/* feed section ends */}


      <section></section>
    </div>
  )
}

export default page;