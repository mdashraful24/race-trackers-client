import {
    createBrowserRouter,
    Navigate
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/shared/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import AddMarathons from "../pages/Dashboard/AddMarathons";
import PrivateRoute from "./PrivateRoute";
import MarathonPage from "../pages/Marathons/MarathonPage";
import MarathonsDetails from "../pages/Marathons/MarathonsDetails";
import RegistrationForm from "../pages/RegistrationForm/RegistrationForm";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyMarathonList from "../pages/Dashboard/MyMarathonList";
import MyApplyList from "../pages/Dashboard/MyApplyList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "marathonsPage",
                element: <PrivateRoute><MarathonPage></MarathonPage></PrivateRoute>
            },

            // Alternative Way
            // {
            //     path: "marathonDetails/:id",
            //     element: <PrivateRoute><MarathonsDetails></MarathonsDetails></PrivateRoute>,
            //     loader: ({ params }) =>
            //         fetch(`https://mw-assignments11-server.vercel.app/allMarathons/${params.id}`, {
            //             method: 'GET',
            //             credentials: 'include',
            //         })
            // },

            {
                path: "marathonDetails/:id",
                element: <PrivateRoute><MarathonsDetails /></PrivateRoute>,
            },
            {
                path: "registrationForm/:id",
                element: <PrivateRoute><RegistrationForm></RegistrationForm></PrivateRoute>
            },
            {
                path: "dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        index: true, // Default route under /dashboard
                        element: <Navigate to="addMarathons" replace />,
                    },
                    {
                        path: "addMarathons",
                        element: <AddMarathons></AddMarathons>
                    },
                    {
                        path: "myMarathonList",
                        element: <MyMarathonList></MyMarathonList>
                    },
                    {
                        path: "myApplyList",
                        element: <MyApplyList></MyApplyList>
                    }
                ]
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;