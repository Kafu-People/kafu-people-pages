/* eslint-disable react/prop-types */
import { parseAnchors } from "../lib/parseAnchors";

export default function RichTextParagraph({ children, className, ...rest }) {
  return <p className={className} {...rest}>{parseAnchors(children)}</p>;
}
