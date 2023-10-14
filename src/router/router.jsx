import { createBrowserRouter, useParams } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "../pages/Index";
import Paletas from "../pages/Paletas"
import { SignUp } from "../components/SignUp";
import { SignIn } from "../components/SignIn";
import AboutUS from "../pages/AboutUs";



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
      {
        path: '/iniciar-sesion',
        element: <SignIn />
      },
      {
        path: '/nosotros',
        element: <AboutUS />
      },
      
    ],

  },
  
]);

export default router;