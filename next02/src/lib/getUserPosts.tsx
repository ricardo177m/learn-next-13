export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    next: {
      revalidate: 60, // check if there is new data in 60 seconds
    },
  });

  if (!res.ok) return null;

  return res.json();
}
