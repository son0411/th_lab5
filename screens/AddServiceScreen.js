import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddServiceScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddService = async () => {
    try {
      await addDoc(collection(db, 'services'), {
        name,
        price: parseFloat(price),
        creator: 'User', // Sửa lại với tên người dùng đăng nhập
        createdAt: new Date(),
      });
      navigation.goBack();
    } catch (error) {
      console.error('Failed to add service:', error.message);
    }
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
      <Button title="Add" onPress={handleAddService} />
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

export default AddServiceScreen;
