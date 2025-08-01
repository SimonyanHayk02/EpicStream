import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import HomeWrapper from "./components/layout/HomeWrapper";
import NotFound from "./pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeWrapper />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
export { routes };
