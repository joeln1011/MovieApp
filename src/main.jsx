import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./pages/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TVshowDetail from "@pages/TVshowDetail";
import RootPlayout from "@pages/RootPlayout";
import HomePage from "@pages/HomePage";
import MovieDetail from "@pages/MovieDetail";
import ModalProvider from "@context/ModalProvider";
import PeoplePage from "@pages/PeoplePage";

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
            `https://api.themoviedb.org/3/person/${params.id}`,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router} />,
  </ModalProvider>,
);
