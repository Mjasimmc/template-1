"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// Custom hook to use the Theme Context
export const useTheme = () => {
    return useContext(ThemeContext);
};

// Helper functions for localStorage
const getStoredTheme = () => localStorage.getItem('theme');
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

const AppContext = ({ children }) => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);
    useEffect(() => {
        const root = window.document.documentElement; // Get the root element (html)

        // Apply the theme class
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Save the theme to localStorage whenever it changes
        setStoredTheme(theme);
    }, [theme]); // Run whenever the theme changes

    // Function to toggle or set the theme
    const toggleTheme = (newTheme) => {
        if (newTheme) {
            setTheme(newTheme); // Set a specific theme if provided
        } else {
            setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Toggle between light and dark
        }
    };

    // Pass the theme value and toggle function to children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default AppContext;
