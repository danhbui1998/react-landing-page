import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignIn, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import './Header.scss';
import logo from '../../assets/images/logo.png';
import { nav } from '../../assets/data/Data';
import Button from '../Button';
function Header() {
    const [isNav, setIsNav] = useState(false);
    const handleNavbar = () => {
        setIsNav(!isNav);
    };
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleClick = () => {
        goToTop();
        setIsNav(false);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsNav(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="header">
            <div className="container flex">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>
                <nav className="navbar">
                    <ul className={!isNav ? 'navbar-list' : 'navbar-mobile'}>
                        {nav.map((item, index) => (
                            <li className="navbar-item" key={index}>
                                <NavLink onClick={handleClick} end to={`${item.path}`}>
                                    {item.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="header-right">
                    <Button className="btn-login" icon={<FontAwesomeIcon icon={faSignIn} />} title="Sign in" />
                    {!isNav ? (
                        <Button
                            noTitle
                            onClick={handleNavbar}
                            className="btn-toggle"
                            icon={<FontAwesomeIcon icon={faBars} />}
                        />
                    ) : (
                        <Button
                            noTitle
                            onClick={handleNavbar}
                            className="btn-toggle"
                            icon={<FontAwesomeIcon icon={faTimes} />}
                        />
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
