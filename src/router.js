import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
]);

export default router;
