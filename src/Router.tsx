import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

import { LoggedInRoute } from "./components/LoggedInRoute";
import { NonLoggedInRoute } from "./components/NonLoggedInRoute";
import { Register } from "./pages/Register";
import { Layout } from "./Layout";
import { Cards } from "./pages/Cards";
import { CreateGame } from "./pages/CreateGame";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to={"/home"} replace /> },
      { path: "/home", element: <LoggedInRoute component={<Home />} /> },
      { path: "/cards", element: <LoggedInRoute component={<Cards />} /> },
      {
        path: "/game/create",
        element: <LoggedInRoute component={<CreateGame />} />,
      },
      {
        path: "/register",
        element: <NonLoggedInRoute component={<Register />} />,
      },
    ],
  },
  { path: "*", element: <LoggedInRoute redirect="/" /> },
]);

export default router;
