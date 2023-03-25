import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const resultsPromise: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await resultsPromise;
  const results: Result[] | undefined = data?.query?.pages;

  if (!results)
    return {
      title: `${searchTerm} not found`,
    };

  return {
    title: searchTerm,
    description: `Results for ${searchTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const resultsPromise: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await resultsPromise;
  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className="bg-slate-200 mx-auto max-w-3xl py-1 min-h-screen px-4 text-black">
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2 className="p-2 text-xl">{searchTerm} not found.</h2>
      )}
    </main>
  );
}
