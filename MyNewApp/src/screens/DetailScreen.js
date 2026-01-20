import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import Loader from '../components/Loader';

export default function DetailScreen({ route, navigation }) {
  // Theme context for styling
  const { theme, toggleTheme } = useTheme();

  // ✅ SAFE product access (prevents crash)
  const product = route?.params?.product;

  // Loading state
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  // ✅ If product is missing
  if (!product) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={{ color: theme.colors.text, fontSize: 16 }}>
          Product data not found 😢
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: '#fff' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Main UI
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Product Detail</Text>

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={toggleTheme}
        >
          <Ionicons
            name={theme.dark ? 'sunny' : 'moon'}
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Title */}
      <Text style={styles.title}>{product.title}</Text>

      {/* Price */}
      <Text style={styles.price}>₹ {product.price}</Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  toggleButton: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#4f46e5',
  },

  image: {
    height: 260,
    borderRadius: 10,
    marginBottom: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  price: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
  },

  backButton: {
    marginTop: 15,
    backgroundColor: '#ef4444',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
