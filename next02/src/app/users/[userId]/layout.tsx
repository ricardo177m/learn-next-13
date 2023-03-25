import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/users">Back to users</Link>
      {children}
    </>
  );
}
