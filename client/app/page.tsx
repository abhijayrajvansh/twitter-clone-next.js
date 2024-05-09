import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (

    <div className="flex flex-col">
      <div className="flex flex-col mt-5 items-center">
        <Link href={'/home'}>
          <button className="text-xl w border-2 border-gray-700 rounded-lg py-4 px-8 hover:bg-gray-500/30">
          Home
          </button>
        </Link>
      </div>
      <div>
      <Image height={900} width={1280} className="max-w-7xl h-[90vh]" src={'/x-landingPage.png'} alt="landing page of x.com"/>
      </div>
    </div>
  )
}

export default page;