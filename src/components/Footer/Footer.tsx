import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <h2>PC Builder</h2>
                <hr className="footer__hr" />
                <Link className="footer__link" to="/build">
                    Builder
                </Link>
            </div>
            <div className="footer-account">
                <h2>Account</h2>
                <hr className="footer__hr" />
                <Link className="footer__link" to="/login">
                    Login
                </Link>
                <Link className="footer__link" to="/register">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Footer
