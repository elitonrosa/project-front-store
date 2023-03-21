import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Categories from "./routes/Categories";
import Home from "./routes/Home";
import Search from "./routes/Search";

import "./styles/rootStyles.sass"

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:search",
        element: <Search />,
      },
      {
        path: "/categories/:id",
        element: <Categories />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
