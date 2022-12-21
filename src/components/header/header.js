import './header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#">
                    <Link to="/"><span>Rick and morty</span> portal</Link>
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><Link to="/str-2"><a href="#">Characters</a></Link></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Episode</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;