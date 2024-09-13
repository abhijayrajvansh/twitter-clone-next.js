import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (

    <div className="flex flex-col justify-center container h-screen">
      <div className="flex flex-col mt-5 items-center">
        <Link href={'/home'}>
          <button className="text-xl border-2 border-gray-700 rounded-lg py-2 px-8 hover:bg-gray-500/30">
          Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default page;