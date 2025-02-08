import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext(); // cosdojom kontext

export const ThemeProvider = ({ children }) => {  // obolochka dlja kontenta
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        // nuzhno obesatelno vernut provaider, kotoryi oborachewaet ljubie peredannije dochernie elementy
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
        // Children -- jeto i est dochernie elementy
    );

}

// kastomnyi huk my eko pridumali chtob ispolsovatj kontext
export const useTheme = () => useContext(ThemeContext); // peredacha objekta useContext obesateljna