import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Appearance } from 'react-native';

// Create Theme Context
const ThemeContext = createContext(null);

// Light theme configuration
export const lightTheme = {
  dark: false,
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
    card: '#F2F2F7',
    text: '#000000',
    border: '#C6C6C8',
    notification: '#FF3B30',
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '900',
    },
  },
};

// Dark theme configuration
export const darkTheme = {
  dark: true,
  colors: {
    primary: '#0A84FF',
    background: '#000000',
    card: '#1C1C1E',
    text: '#FFFFFF',
    border: '#38383A',
    notification: '#FF453A',
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '900',
    },
  },
};

/**
 * Custom hook to access theme context
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

/**
 * ThemeProvider component
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  // Set initial theme + listen for system theme changes
  useEffect(() => {
    const applyTheme = scheme => {
      setTheme(scheme === 'dark' ? darkTheme : lightTheme);
    };

    applyTheme(Appearance.getColorScheme());

    const subscription = Appearance.addChangeListener(
      ({ colorScheme }) => applyTheme(colorScheme)
    );

    return () => subscription.remove();
  }, []);

  /**
   * Manually toggle theme
   */
  const toggleTheme = () => {
    setTheme(prev =>
      prev.dark ? lightTheme : darkTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
