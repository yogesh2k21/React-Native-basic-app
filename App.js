import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

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
      <View key={item.id} style={{ flex: 1, margin: 10, flexDirection: 'row', backgroundColor: 'yellow', height: 200, width: 400 }}>

        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Image source={{ uri: item.image, width: 100, height: 100 }} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <Image source={{ uri: item.image }} />
        </View>

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
    marginTop:27
  },
});
