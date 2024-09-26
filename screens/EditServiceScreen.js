import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const EditServiceScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchService = async () => {
      const docRef = doc(db, 'services', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().name);
        setPrice(docSnap.data().price.toString());
      }
    };
    fetchService();
  }, [id]);

  const handleUpdateService = async () => {
    const docRef = doc(db, 'services', id);
    await updateDoc(docRef, {
      name,
      price: parseFloat(price),
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Service name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Update" onPress={handleUpdateService} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default EditServiceScreen;
