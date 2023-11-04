import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

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