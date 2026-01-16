import { FlatList, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsApi';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          item={item}
          onPress={() =>
            navigation.navigate('Detail', { product: item })
          }
        />
      )}
    />
  );
}
