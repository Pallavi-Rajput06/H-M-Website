import React from "react";
import HomeLayout from "../layouts/HomeLayouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LadiesPage from "../pages/LadiesPage";
import MenPage from "../pages/MenPage";
import KidsPage from "../pages/KidsPage";
import HomePage from "../pages/HomePage";
import BeautyPage from "../pages/BeautyPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <LadiesPage />,
        },
        {
          path: "men",
          element: <MenPage />,
        },
        {
          path: "kid",
          element: <KidsPage />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "beauty",
          element: <BeautyPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
