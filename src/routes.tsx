import { lazy } from "react";

import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const CryptoPage = lazy(() => import("./pages/Crypto"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

const MainLayout = lazy(() => import("./components/layouts/MainLayout"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/cryptoDetail/:id", element: <CryptoPage /> },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
];
