import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";

export default function Copyright () {
  return (
    <section className="mt-3 flex text-faded px-4 justify-center">
      {/* target="_blank" rel="noopener noreferrer" */}
      <Link href='https://linkedin.com/in/abhijayrajvansh' target="_blank" rel="noopener noreferrer">
        <p className="font-medium flex items-center gap-2 ">
          <FaLinkedin className="text-lg text-faded" />
          Abhijay Rajvansh
        </p>
      </Link>
      <Link href={`https://github.com/abhijayrajvansh/twitter-clone-next.js`} target="_blank" rel="noopener noreferrer">
        <p>, view source code.</p>
      </Link>
    </section>
  )
}