import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const router = useRouter();

interface Book {
  id: number;
  title: string;
  author: string;
}

export default function BookListScreen() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
  console.log('Trying to fetch books...');
  fetch('http://192.168.0.100:8000/books')
    .then((res) => {
      console.log('Status:', res.status);
      return res.json();
    })
    .then((data) => {
      console.log('Fetched books:', data);
      setBooks(data);
    })
    .catch((err) => console.error('Fetch error:', err));
}, []);


  const renderItem = ({ item }: { item: Book }) => (
   <TouchableOpacity
    style={styles.item}
    onPress={() =>
      router.push({
        pathname: '/order',
        params: {
          bookId: item.id,
          bookTitle: item.title,
        },
      })
    }
  >
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.author}>by {item.author}</Text>
  </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📚 Book List</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  title: { fontSize: 18 },
  author: { fontSize: 14, color: 'gray' },
});
