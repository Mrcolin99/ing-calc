import { Link } from "react-router-dom"

function Splash() {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to={'/app'}>Calculator</Link>
            <br />
            <Link to={'/pantry'}>Pantry</Link>
            <br />
            <Link to={'/recipes'}>Recipes</Link>
        </div>
    )
}

export default Splash