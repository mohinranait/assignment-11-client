import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import AllAssignments from "../pages/assignments/AllAssignments";
import CreateAssignment from "../pages/assignments/CreateAssignment";
import PrivateRoutes from "./PrivateRoutes";
import UpdateAssignment from "../pages/assignments/UpdateAssignment";
import Dashboard from "../pages/user/Dashboard";
import AllAssignment from "../pages/user/AllAssignment";
import Account from "../pages/user/Account";
import Details from "../pages/Details/Details";
import AllSubmited from "../pages/AllSubmited/AllSubmited";
import MySubmitioni from "../pages/user/MySubmitioni";
import NotFound from "../pages/NotFound/NotFound";

const myRoutes = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <NotFound /> ,
        children : [
            {
                path : '/',
                element : <Home />,
            },
            {
                path : '/assignment',
                element : <AllAssignments />,
            },
            {
                path : '/all-submited',
                element : <PrivateRoutes><AllSubmited /></PrivateRoutes> ,
            },
            {
                path : '/assignments/:id',
                element : <PrivateRoutes><Details /></PrivateRoutes> ,
                loader : async ({params}) => await fetch(`https://assignment-11-server-seven-amber.vercel.app/api/v1/assignment/${params.id}`)
            },
            {
                path : '/create-assignment',
                element : <PrivateRoutes><CreateAssignment /></PrivateRoutes> ,
            },
            {
                path : '/update-assignment/:id',
                element : <PrivateRoutes><UpdateAssignment /></PrivateRoutes> ,
                loader : async ({params}) => await fetch(`https://assignment-11-server-seven-amber.vercel.app/api/v1/assignment/${params.id}`)
            },
            {
                path : "/dashboard",
                element : <PrivateRoutes><Dashboard /></PrivateRoutes> ,
                children : [
                    {
                        index : true,
                        element : <Account />
                    },
                    {
                        path : 'create-assignment',
                        element : <CreateAssignment />
                    },
                    {
                        path : 'update-assignment/:id',
                        element : <UpdateAssignment />,
                        loader : async ({params}) => await fetch(`https://assignment-11-server-seven-amber.vercel.app/api/v1/assignment/${params.id}`)
                    },
                    {
                        path : 'assignment-lists',
                        element : <AllAssignment />
                    },
                    {
                        path : 'my-submition',
                        element : <MySubmitioni />
                    },
                ]
            },
            {
                path : "/login",
                element : <Login />,
            },
            {
                path : "/register",
                element : <Register />,
            },
        ]
    }
])


export default myRoutes;