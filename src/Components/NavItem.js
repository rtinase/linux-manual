import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NavItem = ({ title, link }) => {
    return (
        <li className="nav-item">
            <Link to={link || "#"}>
                {title === "Home"? <FaHome /> : null} {title}
            </Link>
        </li>
    );
};

export default NavItem;
