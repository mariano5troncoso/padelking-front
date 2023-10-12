import { createBrowserRouter, useParams } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "../pages/Index";
import Paletas from "../pages/Paletas"
import { SignUp } from "../components/SignUp";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/paletas',
        element: <Paletas />
      },
      {
        path: '/registro',
        element: <SignUp />
      },
      
    ],

  },
  
]);

export default router;