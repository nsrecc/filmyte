import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash/includes';
import styles from './ThemeProvider.module.scss';

// List of accepted themes
const THEME_LIST = ['light', 'dark'];

// Create ThemeContext with default object to be accessed in any nested component as needed.
const ThemeContext = createContext({
  theme: 'light',
  themeIsLight: true,
  toggleTheme: () => {},
});

// Export useThemeContext to retrieve theme state object via useContext hook at any nested
// components in order to update ThemeContext theme state there.
export const useThemeContext = () => useContext(ThemeContext);

/**
 * Custom hook useLocalTheme
 * - Create theme state with defaultTheme
 * - Updates theme in local storage and state
 * - Gets theme when ThemeProvider mounts
 * @param {string} defaultTheme - default theme, should be 'light'
 */
const useLocalTheme = (defaultTheme) => {
  // create theme state
  const [theme, setTheme] = useState(defaultTheme);

  // take new theme and set in it local storage, update theme state
  const setThemeLocally = (newTheme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  // when ThemeProvider is mounted, get theme from local storage and set it to theme state
  useEffect(() => {
    const retrievedLocalTheme = localStorage.getItem('theme');

    // ensure only accepted themes can be set to theme state
    if (includes(THEME_LIST, retrievedLocalTheme)) setTheme(retrievedLocalTheme);
  }, []);

  return [theme, setThemeLocally];
};

/**
 * ThemeProvider wraps the application in _app.jsx with passed values:
 * - theme state
 * - theme check
 * - toggle theme function
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setThemeLocally] = useLocalTheme('light');

  const themeIsLight = theme === 'light';

  // sets new theme using setThemeLocally from custom hook useLocalTheme
  const toggleTheme = () => {
    return themeIsLight ? setThemeLocally('dark') : setThemeLocally('light');
  };

  // div element here should contain 'app' style class as it's a direct parent to <main>
  return (
    <ThemeContext.Provider value={{ theme, themeIsLight, toggleTheme }}>
      <div className={`app ${styles.theme} ${themeIsLight ? styles.light : styles.dark}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
