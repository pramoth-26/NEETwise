import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';

/**
 * Main App component that wraps the entire application
 */
export default function App() {
  // Main render function
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
