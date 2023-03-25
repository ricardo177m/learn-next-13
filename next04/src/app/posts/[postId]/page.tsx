import getFormattedDate from "@/lib/getFormattedDate";
import { getPost, getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    postId: string;
  };
};

export function generateStaticParams() {
  const posts = getSortedPostsData(); // deduped

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const { postId } = params;
  const posts = getSortedPostsData(); // deduped

  const post = posts.find((post) => post.id === postId);

  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    keywords: ["blog", "post", post.keywords],
  };
}

export default async function PostPage({ params }: Props) {
  const { postId } = params;
  const posts = getSortedPostsData(); // deduped

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, content } = await getPost(postId);

  const formattedDate = getFormattedDate(date);

  return (
    <main className="my-12 px-6 prose prose-xl prose-invert mx-auto">
      <h1 className="text-4xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: content }} />
        <p>
          <Link href={"/"}>⬅️ Back to home</Link>
        </p>
      </article>
    </main>
  );
}
