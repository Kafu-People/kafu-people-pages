// Central error logger.
// In development we surface errors to the console so they're easy to spot.
// In production we stay quiet for now, with a hook ready for a real
// monitoring service (Sentry, Datadog, etc.).
export function logError(message, error) {
  if (!import.meta.env.PROD) {
    console.error(message, error);
    return;
  }

  // TODO: Send to Sentry, Datadog, etc.
}
