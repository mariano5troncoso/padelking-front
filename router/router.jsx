import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Main from "../src/layouts/Main";
import SignIn from "../src/assets/pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

export default router;