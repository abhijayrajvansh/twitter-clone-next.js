import { MdMoreHoriz } from "react-icons/md";

const Profile = () => {
  return (
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
  )
}

export default Profile;