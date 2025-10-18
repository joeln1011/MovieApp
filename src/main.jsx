import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import RootPlayout from "@pages/RootPlayout";
import ModalProvider from "@context/ModalProvider";

const HomePage = lazy(() => import("@pages/HomePage"));
const MovieDetail = lazy(() => import("@pages/MovieDetail"));
const TVshowDetail = lazy(() => import("@pages/TVshowDetail"));
const SearchPage = lazy(() => import("@pages/SearchPage"));
const PeoplePage = lazy(() => import("@pages/PeoplePage"));

const router = createBrowserRouter([
  {
    element: <RootPlayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVshowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${params.id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              },
            },
          );
          return res;
        },
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router} />,
  </ModalProvider>,
);
