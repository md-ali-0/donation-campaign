import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Statistics from '../Pages/Statistics/Statistics'
import Donations from "../Pages/Donation/Donations";
const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: ()=>fetch('/data.json'),
                element: <Home></Home>
            },
            {
                path: '/donations',
                element: <Donations></Donations>
            },
            {
                path: '/donation/:id'
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },

        ]
    },

])

export default Router;