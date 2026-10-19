// Turns [text](https://...) into links. Only https links are converted.
const LINK = /\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g;

export default function RichText({ text }) {
  const parts = [];
  let last = 0;

  for (const match of text.matchAll(LINK)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
      >
        {match[1]}
      </a>
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}