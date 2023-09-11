import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
        <h1>Header</h1>
        <Link to={'/app'}>Calculator </Link>
        <Link to={'/pantry'}>Pantry </Link>
        <Link to={'/recipes'}>Recipes </Link>
    </div>
    )
}

export default Header