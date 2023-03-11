import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex sticky top-0 left-0 text-xl bg-slate-600 text-slate-100 p-4 justify-center gap-8">
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
        </nav>
    )
}

export default Navbar