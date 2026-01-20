import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

// Create stack navigator instance
const Stack = createNativeStackNavigator();

/**
 * Stack navigator for main app screens
 */
const DrawerNavigator = () => {
  // Main render function
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default DrawerNavigator;