/* eslint-disable react/prop-types */
import RichTextParagraph from "./RichTextParagraph";
import { parseAnchors } from "../lib/parseAnchors";
import {
  isBulletLine,
  isNumberedLine,
  isImpactBlock,
  isHeadingBlock,
  isTableBlock,
  parseTableBlock,
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

  if (isHeadingBlock(lines)) {
    return (
      <h2
        key={index}
        className="mb-3 mt-8 text-xl font-bold text-cDarkBlue sm:text-2xl"
      >
        {lines[0].replace(/^##\s+/, "")}
      </h2>
    );
  }

  if (isTableBlock(lines)) {
    const { header, rows } = parseTableBlock(lines);
    return (
      <div key={index} className="mb-6 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm sm:text-base">
          <thead className="bg-surface">
            <tr>
              {header.map((cell) => (
                <th
                  key={cell}
                  scope="col"
                  className="border-b border-slate-200 px-4 py-3 font-semibold text-cDarkBlue"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-slate-100 last:border-0">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 align-top text-gray-700">
                    {parseAnchors(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (lines.every(isBulletLine)) {
    return (
      <ul key={index} className="mb-4 list-disc space-y-2 pl-5">
        {lines.map((line) => (
          <li key={line} className={listItemClass}>
            {parseAnchors(line.replace(/^[•-]\s*/, ""))}
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
            ? `${label.replace(/^\d+\.\s*/, "")}: ${detail}`
            : label.replace(/^\d+\.\s*/, "");

          return (
            <li key={line} className={listItemClass}>
              {parseAnchors(itemText)}
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
