interface SuggestionsProps {
  userpfp: string,
  profileName: string,
  userName: string,
}

const Suggestions:React.FC<SuggestionsProps> = ({userpfp, profileName, userName}) => {
  return (
    <>
      <div className="flex w-full justify-between items-center py-3 cursor-pointer hover:bg-white/5 transition duration-200 px-4">
      <div className="flex gap-3 items-center">
        <img src={`./images/${userpfp}`} alt="userpp" 
          className="h-10 w-10 rounded-full" />
        <div>
          <p className="text-md font-bold">{profileName}</p>
          <p className="text-gray-400">@{userName}</p>
        </div>
      </div>
      <button className=" text-sm font-bold bg-white text-black px-5 py-1.5 rounded-full">Follow</button>
    </div>
  </>
  )
}

export default Suggestions;