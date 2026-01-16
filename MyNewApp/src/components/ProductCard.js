import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ margin: 10, padding: 10, backgroundColor: '#fff' }}>
        <Image
          source={{ uri: item.thumbnail }}
          style={{ height: 150, borderRadius: 8 }}
        />
        <Text style={{ fontWeight: 'bold' }}>
          {item.title}
        </Text>
        <Text>₹ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
