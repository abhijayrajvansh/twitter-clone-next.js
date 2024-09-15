import Image from "next/image";
import { MdMoreHoriz } from "react-icons/md";

const Profile = () => {
  return (
    <div className="flex justify-between items-center px-4 py-3 cursor-pointer rounded-full mb-3">
        <div className="flex gap-3">

          <Image width={40} height={40} 
            src="/images/sample-pfp.jpeg" alt="userpp" 
            className="h-10 rounded-full" 
          />

          <div className="hidden lg:block">
            <p className=" text-sm font-bold">Abhijay Rajvansh</p>
            <p className="text-gray-400 text-sm">@elonmusk</p>
          </div>
        </div>
          <div className="hidden lg:block"><MdMoreHoriz className="text-2xl"/></div>
      </div>
  )
}

export default Profile;