import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useTheme, useStyles } from '../context/ThemeContext';
import { designSystem } from '../styles/themeUtils';

const { spacing } = designSystem;

const LoginScreen = ({ navigation }) => {
  // Theme context for dynamic styling
  const { theme } = useTheme();
  const globalStyles = useStyles();

  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Handles user login using Firebase Authentication
   */
  const handleLogin = async () => {
    // Basic input validation
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      // Generic error message to avoid leaking auth details
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  // Main render
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.heading1}>Login</Text>

      <TextInput
        style={[globalStyles.input, { marginBottom: spacing.md, marginHorizontal: spacing.lg, width: '90%' }]}
        placeholder="Email"
        placeholderTextColor={theme.colors.text}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={[globalStyles.input, { marginBottom: spacing.md, marginHorizontal: spacing.lg, width: '90%' }]}
        placeholder="Password"
        placeholderTextColor={theme.colors.text}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[globalStyles.primaryButton, { width: '90%', marginHorizontal: spacing.lg, marginBottom: spacing.lg }]}
        onPress={handleLogin}
      >
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={globalStyles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
