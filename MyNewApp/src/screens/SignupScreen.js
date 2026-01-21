import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useTheme, useStyles } from '../context/ThemeContext';
import { designSystem } from '../styles/themeUtils';

const { spacing } = designSystem;

const SignupScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const globalStyles = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Account created successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.heading1}>Sign Up</Text>

      <TextInput
        style={[globalStyles.input, { marginBottom: spacing.md, marginHorizontal: spacing.lg, width: '90%' }]}
        placeholder="Email"
        placeholderTextColor={theme.colors.text}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={[globalStyles.input, { marginBottom: spacing.md, marginHorizontal: spacing.lg, width: '90%' }]}
        placeholder="Password"
        placeholderTextColor={theme.colors.text}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={[globalStyles.input, { marginBottom: spacing.md, marginHorizontal: spacing.lg, width: '90%' }]}
        placeholder="Confirm Password"
        placeholderTextColor={theme.colors.text}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[globalStyles.primaryButton, { width: '90%', marginHorizontal: spacing.lg, marginBottom: spacing.lg }]}
        onPress={handleSignup}
      >
        <Text style={globalStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
