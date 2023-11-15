import { Link, useRouteError } from "react-router-dom"
function ErrorPage() {
    const error = useRouteError()
    if(error.status === 404) {
        return (
            <div className="error-page cite_container">
                <h1>Page Not Found</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
  return (
    <div className="error-page cite_container">
        <h1>Somthing went wrong:(</h1>
        <Link to="/">Home</Link>
    </div>
  )
}

export default ErrorPage