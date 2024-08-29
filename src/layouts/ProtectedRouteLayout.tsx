import { Navigate, Outlet } from "react-router-dom"
import useAuthData from "../hooks/useAuthData"
import { showLoginNotification } from "../utils/showNotfication"

const ProtectedRouteLayout = ({ admin }: { admin: boolean }) => {
    const { user } = useAuthData()

    if (admin && (user === null || user.role !== "ADMIN")) {
        return <Navigate to="/" />
    }

    if (user === null) {
        showLoginNotification("Please log in to continue.")
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default ProtectedRouteLayout
