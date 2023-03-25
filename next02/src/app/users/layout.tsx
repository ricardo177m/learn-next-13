import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "Users Page",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
      </nav>
      {children}
    </>
  );
}
