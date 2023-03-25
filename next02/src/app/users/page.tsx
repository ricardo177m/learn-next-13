import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  // const usersData: Promise<User[]> = getAllUsers();

  const users: IUser[] = await getAllUsers();

  return (
    <section>
      <h2>Users</h2>
      <br />
      {users.map((user) => {
        return (
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
      <p key="11">
        <Link href={`/users/11`}>Test non-existent user</Link>
      </p>
    </section>
  );
}
