// navigationBar imports

import Link from "next/link";
import { FaHouse,FaXTwitter } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { PiBell } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { GoBookmark } from "react-icons/go";
import { MdMoreHoriz } from "react-icons/md";
import { LuSquareSlash } from "react-icons/lu";
import { RiFileListLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";


const NAVIGATION_ITEMS = [
  {
    title:'',
    icon: FaXTwitter
  },
  {
    title:'Home',
    icon: FaHouse
  },
  {
    title: 'Explore',
    icon: IoSearchOutline
  },
  {
    title: "Notifications",
    icon: PiBell
  },
  {
    title: "Messages",
    icon: CiMail
  },
  {
    title: "Grok",
    icon: LuSquareSlash
  },
  {
    title: "Lists",
    icon: RiFileListLine
  },
  {
    title: "Bookmarks",
    icon: GoBookmark
  },
  {
    title: "Profile",
    icon: CiUser
  },
  {
    title: "More",
    icon: CgMoreO
  },
]

const NavigationBar = () => {
  return (
  <section className="fixed w-[260px] h-screen flex flex-col justify-between px-2">
      <div className="flex flex-col">
        {
          NAVIGATION_ITEMS.map(item => (
            <Link key={item.title} href={`/${item.title.toLowerCase()}`}>
                <div className="flex items-center hover:bg-white/10 rounded-full px-4 py-2 transition duration-200 w-fit gap-5 pr-6 mb-2">
                  <item.icon className="text-[29px] h-7 w-7" /> 
                  {item.title !== 'home' && <div className="text-lg">{item.title}</div>}
                </div>
            </Link>
          ))
        }
        <button className="bg-primary hover:bg-opacity-80 transition duration-200 rounded-full text-lg font-medium px-3 py-3 mt-5">
          Post
        </button>
      </div>

      <div className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-white/10 rounded-full mb-3">
        <div className="flex gap-3">
          <img src="./images/elonpfp.png" alt="userpp" 
            className="h-12 rounded-full" />
          <div>
            <p className=" text-base font-bold">Elon Musk</p>
            <p className="text-gray-400">@elonmusk</p>
          </div>
        </div>
        <MdMoreHoriz className="text-2xl"/>
      </div>
    </section>
  )
}
export default NavigationBar;