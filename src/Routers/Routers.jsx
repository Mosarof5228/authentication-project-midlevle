import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Order from "../components/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            }
        ]
    },
]);