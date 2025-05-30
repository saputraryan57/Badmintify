// src/screens/Training/FormScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import { colors, fontType } from '../../theme';
import { addDoc, collection, getFirestore } from '@react-native-firebase/firestore';

const FormScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    if (!title || !category || !description || !image) {
      return Alert.alert('Gagal', 'Semua field harus diisi.');
    }

    try {
      const db = getFirestore();
      await addDoc(collection(db, 'trainings'), {
        title,
        category,
        description,
        image,
        createdAt: new Date()
      });

      Alert.alert('Sukses', 'Tips latihan berhasil ditambahkan.');
      navigation.goBack();
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Gagal menambahkan data ke Firebase.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tambah Tips Latihan</Text>

      <TextInput
        placeholder="Judul"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Kategori"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        placeholder="Deskripsi"
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        placeholder="URL Gambar"
        style={styles.input}
        value={image}
        onChangeText={setImage}
      />

      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
          onError={() => Alert.alert('Gagal', 'URL gambar tidak valid')}
        />
      ) : null}

      <Button title="Simpan" onPress={handleSubmit} color="#4A90E2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: colors.white() },
  header: { fontSize: 20, fontFamily: fontType['Pjs-Bold'], marginBottom: 20, color: colors.black() },
  input: {
    backgroundColor: colors.grey(0.1),
    marginBottom: 15,
    padding: 12,
    borderRadius: 8,
    fontFamily: fontType['Pjs-Regular'],
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
});

export default FormScreen;
