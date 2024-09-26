import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const HomeScreen = ({ navigation }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, 'services'));
      const servicesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServices(servicesList);
    };
    fetchServices();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.price} đ</Text>
      <Button title="Details" onPress={() => navigation.navigate('ServiceDetail', { id: item.id })} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Add Service" onPress={() => navigation.navigate('AddService')} />
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

export default HomeScreen;
