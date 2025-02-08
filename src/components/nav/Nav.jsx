import React from 'react';
import { useTheme } from '../themeProvider/ThemeProvider';
import './nav.scss'

const Nav = () => {
    const { theme } = useTheme();
    return (
        <div className={"nav-" + theme}>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    );
};

export default Nav;