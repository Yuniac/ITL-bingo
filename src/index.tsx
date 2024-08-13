import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Cache, SWRConfig } from "swr";
import router from "./Router";
import "./index.css";

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map<string, string>(
    JSON.parse(localStorage.getItem("app-cache") || "[]")
  );

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem("app-cache", appCache);
  });
  console.log(map);
  // We still use the map for write & read for performance.
  return map as Cache;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SWRConfig value={{ provider: localStorageProvider }}>
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
);
