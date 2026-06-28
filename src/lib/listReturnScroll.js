export function createListReturnScroll({
  section,
  listPath,
  detailPathPrefix,
  cardIdPrefix,
}) {
  const RETURN_ID_KEY = `${section}-return-id`;
  const RESTORE_KEY = `${section}-restore-scroll`;

  function setReturnId(id) {
    if (typeof window === "undefined" || !id) return;
    sessionStorage.setItem(RETURN_ID_KEY, String(id));
  }

  function markRestore() {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(RESTORE_KEY, "1");
  }

  function clear() {
    if (typeof window === "undefined") return;
    sessionStorage.removeItem(RETURN_ID_KEY);
    sessionStorage.removeItem(RESTORE_KEY);
  }

  function idFromPath(pathname) {
    if (!pathname.startsWith(detailPathPrefix)) return null;
    const id = pathname.slice(detailPathPrefix.length);
    return id || null;
  }

  function scrollToCard(itemId) {
    const el = document.getElementById(`${cardIdPrefix}-${itemId}`);
    if (!el) return false;
    el.scrollIntoView({ behavior: "instant", block: "center" });
    return true;
  }

  function scrollToReturnCardWithRetry(maxAttempts = 40) {
    if (typeof window === "undefined") return () => {};

    if (sessionStorage.getItem(RESTORE_KEY) !== "1") return () => {};

    const itemId = sessionStorage.getItem(RETURN_ID_KEY);
    if (!itemId) {
      sessionStorage.removeItem(RESTORE_KEY);
      return () => {};
    }

    let attempts = 0;
    let cancelled = false;
    let finished = false;

    const finish = () => {
      if (finished || cancelled) return;
      if (!scrollToCard(itemId)) return;
      finished = true;
      sessionStorage.removeItem(RESTORE_KEY);
      sessionStorage.removeItem(RETURN_ID_KEY);
    };

    const attempt = () => {
      if (cancelled || finished) return;
      attempts += 1;
      finish();
      if (!finished && attempts < maxAttempts) {
        requestAnimationFrame(attempt);
      } else if (!finished) {
        sessionStorage.removeItem(RESTORE_KEY);
      }
    };

    attempt();

    const retryTimers = [50, 150, 350, 700, 1200, 2000, 3000].map((ms) =>
      window.setTimeout(attempt, ms),
    );

    return () => {
      cancelled = true;
      retryTimers.forEach((id) => window.clearTimeout(id));
    };
  }

  function prepareReturn(id) {
    setReturnId(id);
    markRestore();
  }

  return {
    listPath,
    detailPathPrefix,
    setReturnId,
    markRestore,
    prepareReturn,
    clear,
    idFromPath,
    scrollToReturnCardWithRetry,
  };
}
