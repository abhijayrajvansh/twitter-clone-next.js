import Link from "next/link"
import { TfiWorld } from "react-icons/tfi";

export default function Copyright () {
  return (
    <section className="mt-3 flex text-faded px-4 justify-center mb-10">
      <Link href='https://abhijayrajvansh.com' target="_blank" rel="noopener noreferrer">
        <p className="font-medium flex items-center gap-2 ">
          <TfiWorld className="text-lg text-faded" />
          <span className="hover:text-sky-500 hover:underline underline-offset-4 transition">Abhijay Rajvansh</span>
        </p>
      </Link>
      <Link href={`https://github.com/abhijayrajvansh/twitter-clone-next.js`} target="_blank" rel="noopener noreferrer">, view source code.
      </Link>
    </section>
  )
}