import "./navbar.css"
import SignIn from "../../images/sign_in.svg"
import CustomButton from "../CustomButton/CustomButton"
import { Link } from "react-router-dom"
import useAuthData from "../../hooks/useAuthData"
import { IoIosLogOut } from "react-icons/io"

const Navbar = () => {
    const { user, logout } = useAuthData()

    const renderMobileLogin = () =>
        user === null ? (
            <Link to="/login" className="icon-container">
                <img src={SignIn} alt="sign in" />
            </Link>
        ) : (
            <Link to="/">
                <div onClick={logout}>
                    <CustomButton label="" btype="primary" icon={<IoIosLogOut />} />
                </div>
            </Link>
        )

    const renderDesktopLogin = () =>
        user === null ? (
            <Link to="/login">
                <CustomButton label="Sign in" btype="primary" />
            </Link>
        ) : (
            <Link to="/">
                <div onClick={logout}>
                    <CustomButton label="Log Out" btype="primary" icon={<IoIosLogOut />} />
                </div>
            </Link>
        )

    return (
        <nav className="nav">
            <div className="nav__site-name">
                <Link to="/" className="nav__site-name__link">
                    <h1>PC Builder</h1>
                </Link>
            </div>
            <div className="nav__login">
                {user !== null && user.role === "ADMIN" && (
                    <Link to="/dashboard">
                        <CustomButton label="Dashboard" btype="primary" />
                    </Link>
                )}
                <div className="nav-mobile">{renderMobileLogin()}</div>
                <div className="nav-desktop">{renderDesktopLogin()}</div>
            </div>
        </nav>
    )
}

export default Navbar
