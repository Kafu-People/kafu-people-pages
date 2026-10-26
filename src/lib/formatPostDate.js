// Post dates are plain calendar dates ("2026-10-19"), which JavaScript reads as
// UTC midnight. Formatting in UTC shows the same day on the server and in every
// visitor's browser. Without it, visitors west of UTC (all of the Americas) see
// the previous day, and React hydration fails on the text mismatch.
export function formatPostDate(iso, month = "long") {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month,
    year: "numeric",
    timeZone: "UTC",
  });
}
