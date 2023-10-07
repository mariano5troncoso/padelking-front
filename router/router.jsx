import { createBrowserRouter } from "react-router-dom";
import App from "../src/App"
import Main from "../src/layouts/Main";
const router = createBrowserRouter([

    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element: <App/>
            }
        ]
    }
])

export default router