import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';

const ServiceDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const docRef = doc(db, 'services', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setService(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };
    fetchService();
  }, [id]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'services', id));
    navigation.goBack();
  };

  return (
    service && (
      <View style={styles.container}>
        <Text>Service name: {service.name}</Text>
        <Text>Price: {service.price} đ</Text>
        <Text>Creator: {service.creator}</Text>
        <Text>Created at: {service.createdAt.toDate().toString()}</Text>
        <Button title="Edit" onPress={() => navigation.navigate('EditService', { id })} />
        <Button title="Delete" onPress={handleDelete} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ServiceDetailScreen;
