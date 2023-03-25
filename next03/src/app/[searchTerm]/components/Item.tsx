import Image from "next/image";
import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  return (
    <div className="flex flex-row gap-4">
      {result.thumbnail?.source ? ( // show thumbnail if it exists
        <div className="flex flex-col justify-center">
          <Image
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            loading="lazy"
          />
        </div>
      ) : null}
      <div className="flex flex-col">
        <h2>
          <Link
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
            className="text-xl font-bold underline"
          >
            {result.title}
          </Link>
        </h2>
        <p>{result.extract}</p>
      </div>
    </div>
  );
}
