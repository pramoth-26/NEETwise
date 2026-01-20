import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../context/ThemeContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';


const AppNavigator = () => {
  // Theme context for navigation styling
  const { theme } = useTheme();
  // Current authenticated user
  const [user, setUser] = useState(null);
  // Loading state for auth check
  const [loading, setLoading] = useState(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Show nothing while checking auth state
  if (loading) {
    return null; // Or a loading screen
  }

  // Main render function
  return (
    <>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      <NavigationContainer theme={theme}>
        {user ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
