import { createBrowserRouter } from "react-router";
import BaseLayout from "./pages/BaseLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";

let router = createBrowserRouter([
  {
    Component: BaseLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "game/:slug", Component: GameDetailPage },
    ],
  },
]);

export default router;
