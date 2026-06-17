import React from "react";
import { SITE_NAME } from "../../constants/site";

const LegalDocumentHeader = ({ title, subtitle }) => (
  <header className="mb-10 md:mb-12 border-b border-textGray/30 pb-8">
    <p className="text-sm font-semibold uppercase tracking-wide text-CPurple mb-2">
      {SITE_NAME}
    </p>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cDarkBlue mb-3">
      {title}
    </h1>
    {subtitle ? (
      <p className="text-base sm:text-lg text-textGray max-w-2xl">{subtitle}</p>
    ) : null}
    <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-cBlack">
      <div className="rounded-lg bg-cgray px-4 py-3 border border-textGray/20">
        <dt className="font-semibold text-cDarkBlue">Effective Date</dt>
        <dd className="mt-1 text-textGray">April 25, 2026</dd>
      </div>
      <div className="rounded-lg bg-cgray px-4 py-3 border border-textGray/20">
        <dt className="font-semibold text-cDarkBlue">Last Updated</dt>
        <dd className="mt-1 text-textGray">April 25, 2026</dd>
      </div>
      <div className="rounded-lg bg-cgray px-4 py-3 border border-textGray/20">
        <dt className="font-semibold text-cDarkBlue">Version</dt>
        <dd className="mt-1 text-textGray">1.0</dd>
      </div>
    </dl>
  </header>
);

export default LegalDocumentHeader;
