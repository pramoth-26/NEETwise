import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.container}>
      {/* Loading Symbol */}
      <ActivityIndicator size="large" color="#4F46E5" />

      {/* Loading Text */}
      <Text style={styles.text}>Loading products...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#4F46E5',
    fontWeight: '500',
  },
});
