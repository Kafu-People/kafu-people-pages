import "../dist/server/entry.mjs";
import { renderPage } from "vike/server";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" || request.method === "HEAD") {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    }

    const pageContext = await renderPage({
      urlOriginal: url.pathname + url.search,
    });

    const { httpResponse } = pageContext;
    if (!httpResponse) {
      return new Response("Not Found", { status: 404 });
    }

    const headers = new Headers();
    if (httpResponse.headers) {
      for (const [key, value] of Object.entries(httpResponse.headers)) {
        if (value !== undefined) headers.set(key, String(value));
      }
    }
    if (!headers.has("Content-Type") && httpResponse.contentType) {
      headers.set("Content-Type", httpResponse.contentType);
    }

    return new Response(httpResponse.body, {
      status: httpResponse.statusCode ?? 200,
      headers,
    });
  },
};
