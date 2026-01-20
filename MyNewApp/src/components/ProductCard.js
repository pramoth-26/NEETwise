/**
 * ProductCard component for displaying product information in a card format
 * @param {Object} item - Product object containing title, price, thumbnail, etc.
 * @param {Function} onPress - Callback function when card is pressed
 */
export default function ProductCard({ item, onPress }) {
  // Main render function
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
