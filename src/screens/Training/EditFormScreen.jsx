import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import colors from '../../theme/colors';
import fontType from '../../theme/fonts'; 
import { getFirestore, doc, updateDoc } from '@react-native-firebase/firestore';
import { displayNotification } from '../utils/notification';

const EditFormScreen = ({ route, navigation }) => {
  const { article } = route.params;

  const [title, setTitle] = useState(article.title);
  const [category, setCategory] = useState(article.category);
  const [description, setDescription] = useState(article.description);
  const [image, setImage] = useState(article.image);

  const handleUpdate = async () => {
    if (!title || !category || !description || !image) {
      return Alert.alert('Gagal', 'Semua field harus diisi.');
    }

    try {
      const db = getFirestore();
      const docRef = doc(db, 'trainings', article.id);
      await updateDoc(docRef, {
        title,
        category,
        description,
        image,
      });

      await displayNotification('Tips Diperbarui', `"${title}" berhasil diperbarui.`); // ⬅️ Notifikasi lokal
      Alert.alert('Sukses', 'Tips latihan berhasil diperbarui.');
      navigation.goBack();
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Gagal memperbarui data di Firebase.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Tips Latihan</Text>

      <TextInput
        placeholder="Judul"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholderTextColor={colors.grey(0.6)}
      />
      <TextInput
        placeholder="Kategori"
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholderTextColor={colors.grey(0.6)}
      />
      <TextInput
        placeholder="Deskripsi"
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
        placeholderTextColor={colors.grey(0.6)}
      />
      <TextInput
        placeholder="URL Gambar"
        style={styles.input}
        value={image}
        onChangeText={setImage}
        placeholderTextColor={colors.grey(0.6)}
      />

      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
          onError={() => Alert.alert('Gagal', 'URL gambar tidak valid')}
        />
      ) : null}

      <Button title="Perbarui" onPress={handleUpdate} color="#4A90E2" />
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
    color: colors.black(),
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
});

export default EditFormScreen;
