/* eslint-disable react/prop-types */
// Photographer credit for article featured images (Unsplash/Pexels licenses).
export default function ImageCredit({ credit }) {
  if (!credit?.name) return null;
  return (
    <figcaption className="px-1 pt-2 text-xs text-gray-500">
      Photo:{" "}
      {credit.url ? (
        <a href={credit.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {credit.name}
        </a>
      ) : (
        credit.name
      )}
      {credit.source ? (
        <>
          {" "}on{" "}
          {credit.sourceUrl ? (
            <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {credit.source}
            </a>
          ) : (
            credit.source
          )}
        </>
      ) : null}
    </figcaption>
  );
}
