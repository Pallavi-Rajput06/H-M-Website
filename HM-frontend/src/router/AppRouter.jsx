import React from "react";
import HomeLayout from "../layouts/HomeLayouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LadiesPage from "../pages/LadiesPage";
import MenPage from "../pages/MenPage";
import KidsPage from "../pages/KidsPage";
import HomePage from "../pages/HomePage";
import BeautyPage from "../pages/BeautyPage";
import AuthPage from "../pages/AuthPage";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";
import ProductDetailPage from "../pages/ProductDetailPage";

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
        {
          path: "auth",
          element: <AuthPage />,
        },
        {
          path: "wishlist",
          element: <WishlistPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "product",
          element: <ProductDetailPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
