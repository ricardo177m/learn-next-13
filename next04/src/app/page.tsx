import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="my-12 text-3xl text-center">
        Hello world! 👋 &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Ricardo</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
