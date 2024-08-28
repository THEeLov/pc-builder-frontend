import MainLayout from "../layouts/MainLayout"
import { createBrowserRouter } from "react-router-dom"
import Homepage from "../pages/Homepage/Homepage"
import Build from "../pages/Build/Build"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Components from "../pages/Components/Components"
import OptionsPage from "../pages/Options/OptionsPage"
import ProtectedRouteLayout from "../layouts/ProtectedRouteLayout"
import Dashboard from "@/pages/Dashboard/Dashboard"
import { DialogProvider } from "@/providers/DialogProvider"
import ErrorsNotFound from "@/pages/Errors/NotFound"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "/options",
                element: <ProtectedRouteLayout admin={false} />,
                children: [{ path: "", Component: OptionsPage }],
            },
            {
                path: "/components",
                element: (
                    <DialogProvider>
                        <ProtectedRouteLayout admin={false} />
                    </DialogProvider>
                ),
                children: [{ path: "", Component: Components }],
            },
            {
                path: "/build",
                element: <ProtectedRouteLayout admin={false} />,
                children: [{ path: "", Component: Build }],
            },
            {
                path: "/dashboard",
                element: (
                    <DialogProvider>
                        <ProtectedRouteLayout admin={true} />
                    </DialogProvider>
                ),
                children: [{ path: "", Component: Dashboard }],
            },
        ],
    },
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/register",
        Component: Register,
    },
    {
        path: "*",
        Component: ErrorsNotFound,
    },
])
