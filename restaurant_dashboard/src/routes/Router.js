import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Cards = lazy(() => import("../views/ui/Cards.js"))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/orders" /> },
      { path: "/orders", exact: true, element: <Starter /> },
      { path: "/insights", exact: true, element: <Cards /> },
    ],
  },
];

export default ThemeRoutes;
