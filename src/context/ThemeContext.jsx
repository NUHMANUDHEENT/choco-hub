import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('choco_theme');
        return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        const root = window.document.documentElement;
        const body = window.document.body;

        if (isDarkMode) {
            root.classList.add('dark');
            body.classList.add('dark');
            localStorage.setItem('choco_theme', 'dark');
            console.log("🌙 Theme: Dark");
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
            localStorage.setItem('choco_theme', 'light');
            console.log("☀️ Theme: Light");
        }
    }, [isDarkMode]);


    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
