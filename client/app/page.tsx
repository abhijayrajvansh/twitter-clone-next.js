import Link from "next/link";

const page = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <Link href={'/home'}>
        <button className="mt-5 text-xl w border-2 border-gray-700 rounded-lg py-4 px-8 hover:bg-gray-500/30">
        Home
        </button>
      </Link>
      <p className="text-xl mt-5">click on home or goto /home for feed.</p>
      
    </div>
  )
}

export default page;