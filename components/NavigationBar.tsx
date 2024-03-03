// navigation bar imports
import Link from "next/link";
import { FaRegUser, FaHouse,FaXTwitter } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { PiBell } from "react-icons/pi";
import { SlEnvolope } from "react-icons/sl";
import { FaRegBookmark } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";


const NAVIGATION_ITEMS = [
  {
    title:'home',
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
    icon: SlEnvolope
  },
  {
    title: "Bookmarks",
    icon: FaRegBookmark
  },
  {
    title: "Profile",
    icon: FaRegUser
  },
  {
    title: "More",
    icon: CgMoreO
  },
]

const NavigationBar = () => {
  return (
  <section className="fixed w-[275px] h-screen flex flex-col justify-between">
      <div className="flex flex-col">
        {
          NAVIGATION_ITEMS.map(item => (
            <Link key={item.title} href={`/${item.title.toLowerCase()}`}>
                <div className="flex items-center hover:bg-white/10 rounded-full px-4 py-3 m-1  transition duration-200 w-fit gap-5 pr-6">
                  <item.icon className="text-[28px] h-7" /> 
                  {item.title !== 'home' && <div className="text-xl">{item.title}</div>}
                </div>
            </Link>
          ))
        }
        <button className="bg-primary hover:bg-opacity-80 transition duration-200 rounded-full text-lg font-medium p-3 m-4">
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