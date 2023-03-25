import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type IParams = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: IParams): Promise<Metadata> {
  const userPromise: Promise<IUser> = getUser(userId);
  const user: IUser = await userPromise;

  if (!user || !user.id) return { title: "User not found" };

  return {
    title: user.name,
    description: `${user.name}'s Page`,
  };
}

export default async function UserPage({ params: { userId } }: IParams) {
  const userPromise: Promise<IUser> = getUser(userId);
  const userPostsPromise: Promise<IPost[]> = getUserPosts(userId);

  const user = await userPromise;
  //   const [user, userPosts] = await Promise.all([userPromise, userPostsPromise]);

  if (!user || !user.id) return notFound();

  //* https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components
  return (
    <>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback={<h2>Loading</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostsPromise} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  // nextjs deduplicates requests
  const usersPromise: Promise<IUser[]> = getAllUsers();
  const users: IUser[] = await usersPromise;

  return users.map((user) => ({ userId: user.id.toString() }));
}
