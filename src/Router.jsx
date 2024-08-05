import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path:"/login",
        element: <LoginPage/>
    },
    {
        path:"/register",
        element: <RegisterPage/>
    }
])