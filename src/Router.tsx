import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

import { LoggedInRoute } from "./components/LoggedInRoute";
import { NonLoggedInRoute } from "./components/NonLoggedInRoute";
import { Register } from "./pages/Register";
import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/home", element: <LoggedInRoute component={<Home />} /> },
      {
        path: "/register",
        element: <NonLoggedInRoute component={<Register />} />,
      },
    ],
  },
  { path: "*", element: <LoggedInRoute redirect="/" /> },
]);

export default router;
