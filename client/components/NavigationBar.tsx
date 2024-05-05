
import Link from "next/link";
import TweetBtn from '@/components/TweetBtn';
import Profile from "./Profile";
import { FaHouse,FaXTwitter } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { PiBell } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { GoBookmark } from "react-icons/go";
import { LuSquareSlash } from "react-icons/lu";
import { RiFileListLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";

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
    title: "Communities",
    icon: IoPeopleOutline
  },
  {
    title: "Premium",
    icon: FaXTwitter
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
  <section className="fixed w-[100px] lg:w-[275px] h-screen flex flex-col justify-between px-4 border-r border-gray-700">
      <div className="flex flex-col">
        
        {
          NAVIGATION_ITEMS.map(item => (
            <Link key={item.title} href={`${item.title === 'Home' ? '/': item.title.toLowerCase()}`}>
                <div className="flex items-center hover:bg-white/10 rounded-full px-4 py-2 transition duration-200 w-fit gap-5 mb-2">
                  <item.icon className="text-[29px] h-7 w-7" /> 
                  
                  <div className="text-lg hidden lg:block">{item.title}</div>

                </div>
            </Link>
          ))
        }
        
        <div>
          <button className="bg-primary hover:bg-opacity-80 lg:w-full transition duration-200 rounded-full text-lg font-medium px-4 py-3 mt-5">
            <div className="lg:hidden"><TweetBtn /></div>
            <p className="hidden lg:block">Post</p>
          </button>
        </div>
      </div>

      <Profile />
      
    </section>
  )
}
export default NavigationBar;