import React from 'react';
import { useTheme } from '../themeProvider/ThemeProvider';

const TaggleButton = () => {

    const { toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme}>
                Theme
            </button>

        </div>
    );
};

export default TaggleButton;