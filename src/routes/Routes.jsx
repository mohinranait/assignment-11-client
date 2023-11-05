import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import AllAssignments from "../pages/assignments/AllAssignments";
import CreateAssignment from "../pages/assignments/CreateAssignment";
import PrivateRoutes from "./PrivateRoutes";
import UpdateAssignment from "../pages/assignments/UpdateAssignment";

const myRoutes = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <div>Error page</div>,
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
                path : '/create-assignment',
                element : <PrivateRoutes><CreateAssignment /></PrivateRoutes> ,
            },
            {
                path : '/update-assignment/:id',
                element : <PrivateRoutes><UpdateAssignment /></PrivateRoutes> ,
                loader : async ({params}) => await fetch(`http://localhost:5000/api/v1/assignment/${params.id}`)
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