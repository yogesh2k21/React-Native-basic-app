import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Button,Alert } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products', { method: "GET" })
    const data = await res.json();
    console.log(data);
    setProducts(data);
  }

  const alrt=(title)=>{
    return Alert.alert('Product title',title);
  }

  const product = (item) => {
    return (
      <View key={item.id} style={{ flex: 1, margin: 10, flexDirection: 'row', backgroundColor: 'yellow', height: 200, width: 400 }}>

        <View style={{
          flex: 1, backgroundColor: 'red', alignItems: 'center',
          justifyContent: 'center', margin: 10,
        }}>
          <Image source={{ uri: item.image, width: 150, height: 150, borderRadius: 20 }} />
        </View>

        <View style={{ flex: 1, backgroundColor: 'green' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, marginLeft: 15 }}>{item.title.slice(0, 12)}...</Text>
          <Text style={{ fontSize: 15, marginTop: 5, marginLeft: 15 }}>Rating:- {item.rating.rate} ★</Text>
          <Text style={{ fontSize: 20, marginTop: 5, marginLeft: 15 }}>${item.price}</Text>

          <View style={{ width: "90%", margin: 10, backgroundColor: "red", marginTop: 25 }}>
            <Button onPress={alrt(item.title)} title="Buy" />
          </View>
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
    marginTop: 27
  },
  button: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
