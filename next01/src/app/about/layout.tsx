import Link from "next/link";
import styles from "./styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Example Description",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
