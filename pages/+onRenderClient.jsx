import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "../src/index.css";
import App from "../src/App";
import { SSRDataProvider } from "../src/lib/SSRDataContext";

export { onRenderClient };

function onRenderClient() {
  const el = document.getElementById("__INITIAL_STATE__");
  const ssrData = el ? JSON.parse(el.textContent) : {};

  hydrateRoot(
    document.getElementById("root"),
    <SSRDataProvider data={ssrData}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </SSRDataProvider>,
  );
}
