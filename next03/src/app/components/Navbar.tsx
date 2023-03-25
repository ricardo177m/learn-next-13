import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white hover:text-gray-300 grid place-content-center mb-2 md:mb-0 ">
        <Link href="/">Home</Link>
      </h1>
      <Search />
    </nav>
  );
}
