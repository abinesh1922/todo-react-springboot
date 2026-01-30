import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from '../components/RootLayout';
import Home from '../pages/Home.jsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout />,
        children:[
            {index:true, element:<Home />}
        ]
    }
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}