import Authentication from "../features/auth";
import Detail from "../detail";
import Home from "../features/home";
import Layout from "../component/layout";
import ProctectedRoutes from "./protected-routes";
import TVShows from "../features/tv-shows";
import Trending from "../features/trending";
import UpComing from "../features/upcoming";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <ProctectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/detail/:id",
            element: <Detail />,
          },
          {
            path: "/upcoming",
            element: <UpComing />,
          },
          {
            path: "/trending",
            element: <Trending />,
          },
          {
            path: "/tv-shows",
            element: <TVShows />,
          },
          {
            path: "/login",
            element: <Authentication />,
          },
        ],
      },
    ],
  },
]);
