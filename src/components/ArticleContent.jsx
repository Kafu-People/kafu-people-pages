/* eslint-disable react/prop-types */
import RichTextParagraph from "./RichTextParagraph";
import {
  isBulletLine,
  isNumberedLine,
  isImpactBlock,
  parseNumberedLine,
  splitArticleBlocks,
} from "../lib/blogText";

const bodyClass = "mb-4 text-base leading-relaxed text-gray-700 sm:text-lg";
const listItemClass = "text-base leading-relaxed text-gray-700 sm:text-lg";
const impactClass =
  "mb-4 text-base font-bold leading-relaxed text-cDarkBlue sm:text-lg";

function renderBlock(block, index, speakableProps) {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);

  if (lines.length === 0) return null;

  if (lines.every(isBulletLine)) {
    return (
      <ul key={index} className="mb-4 list-disc space-y-2 pl-5">
        {lines.map((line) => (
          <li key={line} className={listItemClass}>
            {line.replace(/^[•\-]\s*/, "")}
          </li>
        ))}
      </ul>
    );
  }

  if (lines.every(isNumberedLine)) {
    return (
      <ol key={index} className="mb-4 list-decimal space-y-3 pl-5">
        {lines.map((line) => {
          const { label, detail } = parseNumberedLine(line);
          const itemText = detail
            ? `${label.replace(/^\d+\.\s*/, "")} — ${detail}`
            : label.replace(/^\d+\.\s*/, "");

          return (
            <li key={line} className={listItemClass}>
              {itemText}
            </li>
          );
        })}
      </ol>
    );
  }

  const text = lines.join(" ");

  if (isImpactBlock(text)) {
    return (
      <p key={index} {...speakableProps} className={impactClass}>
        {text}
      </p>
    );
  }

  return (
    <RichTextParagraph key={index} {...speakableProps} className={bodyClass}>
      {text}
    </RichTextParagraph>
  );
}

export default function ArticleContent({ text, speakableIndex = 0 }) {
  const blocks = splitArticleBlocks(text);

  return (
    <div className="max-w-none">
      {blocks.map((block, index) =>
        renderBlock(
          block,
          index,
          index === speakableIndex ? { "data-speakable": "summary" } : {},
        ),
      )}
    </div>
  );
}
