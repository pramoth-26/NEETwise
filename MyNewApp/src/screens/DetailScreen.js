import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, useStyles } from '../context/ThemeContext';
import Loader from '../components/Loader';

export default function DetailScreen({ route, navigation }) {
  // Theme context for styling
  const { theme, toggleTheme } = useTheme();
  const globalStyles = useStyles();
  // Product data passed from navigation
  const { product } = route.params;
  // Loading state for initial render delay
  const [loading, setLoading] = useState(true);

  // Simulate loading delay for better UX
  useEffect(() => {
    // Wait 1 second after navigation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Styles for the DetailScreen component
  // Using global styles from useStyles

  // Show loader while simulating loading
  if (loading) {
    return <Loader />;
  }

  // Main render function
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.heading2}>Product Detail</Text>
        <TouchableOpacity style={globalStyles.primaryButton} onPress={toggleTheme}>
          <Ionicons name={theme.dark ? 'sunny' : 'moon'} size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: product.thumbnail }}
        style={globalStyles.productImage}
      />
      <View style={{ padding: 16 }}>
        <Text style={globalStyles.heading1}>
          {product.title}
        </Text>
        <Text style={globalStyles.productPrice}>₹ {product.price}</Text>
        <Text style={globalStyles.body}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}



