import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../../assets/images/logo.png';
import { nav } from '../../assets/data/Data';
import Button from '../Button';
function Header() {
    return (
        <header className="header">
            <div className="container flex">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <nav className="navbar">
                    <ul className="navbar-list">
                        {nav.map((item, index) => (
                            <li className="navbar-item" key={index}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header-right">
                    <Button className="btn-login" icon={<FontAwesomeIcon icon={faSignIn} />} title="Sign in" />
                    <Button className="btn-toggle" icon={<FontAwesomeIcon icon={faBars} />} />
                </div>
            </div>
        </header>
    );
}

export default Header;
