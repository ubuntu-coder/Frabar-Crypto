import { lazy } from "react";

import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const CryptoPage = lazy(() => import("./pages/HomePage"));

const MainLayout = lazy(() => import("./components/layouts/MainLayout"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/cryptoDetail/:id" },
    ],
  },
];
