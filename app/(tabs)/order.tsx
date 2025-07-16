import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function OrderScreen() {
  const { bookId, bookTitle } = useLocalSearchParams();
  const router = useRouter();

  const [customerName, setCustomerName] = useState('');

  const handleOrder = async () => {
    if (!customerName.trim()) {
      Alert.alert('Please enter your name');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.100:8000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          book_id: Number(bookId),
          customer_name: customerName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('✅ Order Successful', `Thanks ${data.customer_name}!`);
        router.back(); // Go back to book list
      } else {
        Alert.alert('Error', 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Could not connect to the server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📖 {bookTitle}</Text>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        value={customerName}
        onChangeText={setCustomerName}
        style={styles.input}
        placeholder="Your name"
      />
      <Button title="Place Order" onPress={handleOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  heading: { fontSize: 22, marginBottom: 20 },
  label: { marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
