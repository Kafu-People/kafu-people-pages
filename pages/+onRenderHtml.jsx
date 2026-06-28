import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import "../src/index.css";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "../src/App";
import { SSRDataProvider } from "../src/lib/SSRDataContext";
import { resolveSSRData } from "../src/lib/ssrDataResolver";

export { onRenderHtml };

function onRenderHtml(pageContext) {
  const helmetContext = {};

  const resolved = resolveSSRData(pageContext.urlOriginal);
  const ssrData = resolved.data ? { [resolved.pageType]: resolved.data } : {};

  const pageHtml = renderToString(
    <SSRDataProvider data={ssrData}>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={pageContext.urlOriginal}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </SSRDataProvider>,
  );

  const { helmet } = helmetContext;

  const title = helmet.title ? helmet.title.toString() : "";
  const meta = helmet.meta ? helmet.meta.toString() : "";
  const link = helmet.link ? helmet.link.toString() : "";
  const script = helmet.script ? helmet.script.toString() : "";

  const serialized = JSON.stringify(ssrData).replace(/</g, "\\u003c");

  const fontHead = `
    <link rel="icon" type="image/png" href="/mini-logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <noscript>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      />
    </noscript>
  `;

  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${dangerouslySkipEscape(fontHead)}
    ${dangerouslySkipEscape(title)}
    ${dangerouslySkipEscape(meta)}
    ${dangerouslySkipEscape(link)}
    ${dangerouslySkipEscape(script)}
  </head>
  <body>
    <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
    <script id="__INITIAL_STATE__" type="application/json">${serialized}</script>
  </body>
</html>`;

  return { documentHtml };
}
