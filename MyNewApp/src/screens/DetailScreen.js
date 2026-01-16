import { View, Text, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

export default function DetailScreen({ route }) {
  const { product } = route.params;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait 1 second after navigation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image
        source={{ uri: product.thumbnail }}
        style={{ height: 250 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {product.title}
      </Text>
      <Text>₹ {product.price}</Text>
      <Text>{product.description}</Text>
    </ScrollView>
  );
}
