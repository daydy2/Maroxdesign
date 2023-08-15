import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../layout/LandingLayout";
import Homepage from "../page/Homepage";
import WomenCat from "../page/WomenCat";
import MenCat from "../page/MenCat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/women",
        element: <WomenCat />,
      },
      {
        path: "/men",
        element: <MenCat />,
      },
    ],
  },
]);

export default router;
