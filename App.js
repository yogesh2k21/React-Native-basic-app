import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products', { method: "GET" })
    const data = await res.json();
    console.log(data);
    setProducts(data);
  }

  const product = (item) => {
    return (
      <View key={item.id} style={{flex:1}}>
        <View></View>
        <View></View>
        <Text>hello</Text>
      </View>
    )
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ScrollView>
      <View style={styles.main}>
        {products.map(product)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
