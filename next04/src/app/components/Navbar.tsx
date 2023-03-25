import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-cyan-800 p-4 sticky drop-shadow-xl z-1">
      <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 prose prose-xl mx-auto items-center">
        <Link
          href={"/"}
          className="text-white/90 hover:text-white no-underline text-center font-bold text-3xl sm:text-2xl transition-colors"
        >
          Home
        </Link>
        <div className="flex flex-row items-center justify-center space-x-5 text-4xl">
          <Link
            href={"https://github.com/ricardo177m"}
            target="_blank"
            className="text-white/90 hover:text-white no-underline transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            href={"#youtube"}
            className="text-white/90 hover:text-white no-underline transition-colors"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </nav>
  );
}
