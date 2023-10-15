import './Header.css'
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className='main'>
            <Link to={'/'} className='link-wrapper'>
                <h2 className='main-title' >Bakery Calculator</h2>
            </Link>
            <Link to={'/app'} className='calculator-link'>Calculator </Link>
            <Link to={'/pantry'} className='pantry-link'>Pantry </Link>
            <Link to={'/recipes'} className='recipe-link'>Recipes </Link>
        </div>
    )
}

export default Header