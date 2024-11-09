import { Link } from 'react-router-dom'
import './index.css'

const Header =()=>(
    <nav className="nav-container">
        <Link to="/" className="nav-link">
            <h1 className="nav-h1">Brisphere</h1>
        </Link>
        <div className="nav-inner-container">
            <Link to="/discover" className="nav-link">
                <p className="nav-p">Discover</p>
            </Link>
            <Link to="/services" className="nav-link">
                <p className="nav-p">Services</p>
            </Link>
            <p className="nav-p">About Us</p>
        </div>
    </nav>
)

export default Header