import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout";
import Homepage from "../page/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
