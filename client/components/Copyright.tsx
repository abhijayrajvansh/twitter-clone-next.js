import Link from "next/link"
import { FaGithub } from "react-icons/fa";

export default function Copyright () {
  return (
    <section className="mt-3 flex flex-col items-center text-faded px-4 justify-center mb-10">
      <Link href='https://abhijayrajvansh.com' target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 hover:text-sky-500">
        <p className="font-medium flex items-center gap-1 text-sm">Developed by Abhijay Rajvansh
        </p>
      </Link>
      <Link className="text-sm flex items-center mt-1 gap-2 hover:text-white/70 hover:underline underline-offset-4" href={`https://github.com/abhijayrajvansh/twitter-clone-next.js`} target="_blank" rel="noopener noreferrer"><FaGithub size={18}/>view source code.
      </Link>
    </section>
  )
}