import React from 'react';
import { useTheme } from '../themeProvider/ThemeProvider';
import './content.scss'

const Content = () => {
    const { theme } = useTheme();
    return (
        <div className={"content-" + theme}>
            <h1>Ето Контент</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi repudiandae atque quibusdam eius soluta maiores. Provident
                nostrum rerum hic neque voluptatum voluptas,
                velit eligendi illo incidunt, beatae, accusantium odit dolores!</p>
        </div>
    );
};


export default Content;