import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={`dropdown ${isOpen? "open" : ""}`}>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                {title} <MdArrowDropDown />
            </button>
            <ul className="submenu">{children}</ul>
        </li>
    );
};

export default Dropdown;
