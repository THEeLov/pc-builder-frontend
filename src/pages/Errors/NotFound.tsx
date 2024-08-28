import { Link } from "react-router-dom"
import "./notfound.css"

export function ErrorsNotFound() {
    return (
        <div className="error-page">
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to="/">Go back to homepage</Link>
        </div>
    )
}

export default ErrorsNotFound
