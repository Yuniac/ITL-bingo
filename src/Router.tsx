import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
