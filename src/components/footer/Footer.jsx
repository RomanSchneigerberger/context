import React from 'react';
import { useTheme } from '../themeProvider/ThemeProvider';
import './footer.scss'

const Footer = () => {
    const { theme } = useTheme();
    return (
        <div className={"footer-" + theme}>
            <ul>
                <li>
                    Faceboock
                </li>
                <li>
                    Instagram
                </li>
                <li>
                    Telegram
                </li>
            </ul>
        </div>
    );
};

export default Footer;