import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(post.date);

  return (
    <li className="mt-4 text-2xl">
      <Link href={"/posts/" + id} className="underline hover:text-white">
        {title}
      </Link>
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
