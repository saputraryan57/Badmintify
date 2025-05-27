// screens/Training/index.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert, Image } from 'react-native';
import axios from '../../api';
import { colors, fontType } from '../../theme';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Training = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const res = await axios.get('/articles');
      setData(res.data);
    } catch (err) {
      Alert.alert('Gagal', 'Tidak bisa mengambil data.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/articles/${id}`);
      fetchData();
    } catch {
      Alert.alert('Error', 'Gagal menghapus.');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchData);
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Animatable.View animation="fadeInUp" duration={600}>
        <Animatable.Text animation="fadeInDown" duration={600} style={styles.title}>
          Training Tips
        </Animatable.Text>

        {/* ✅ Konten Statis */}
        <Animatable.View animation="fadeInUp" delay={200} duration={600} style={styles.section}>
          <Text style={styles.subtitle}>💥 Smash Kuat</Text>
          <Text style={styles.paragraph}>Smash adalah senjata utama dalam permainan badminton. Berikut beberapa latihan untuk meningkatkan kekuatan smash kamu:</Text>
          <Text style={styles.bullet}>• Latihan rotasi bahu dengan dumbbell ringan.</Text>
          <Text style={styles.bullet}>• Perkuat pergelangan tangan dengan wrist curls.</Text>
          <Text style={styles.bullet}>• Praktikkan posisi tubuh saat melakukan jump smash.</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={400} duration={600} style={styles.section}>
          <Text style={styles.subtitle}>🦶 Latihan Kaki</Text>
          <Text style={styles.paragraph}>Kaki yang kuat dan gesit sangat penting untuk menjangkau semua area lapangan:</Text>
          <Text style={styles.bullet}>• Latihan footwork 6 titik di lapangan.</Text>
          <Text style={styles.bullet}>• Skipping selama 15 menit setiap hari.</Text>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={600} duration={600} style={styles.section}>
          <Text style={styles.subtitle}>💪 Daya Tahan</Text>
          <Text style={styles.paragraph}>Daya tahan akan membuat kamu tetap kuat dan fokus hingga akhir pertandingan:</Text>
          <Text style={styles.bullet}>• Jogging selama 30 menit, 3 kali seminggu.</Text>
          <Text style={styles.bullet}>• Latihan interval dengan shuttle run.</Text>
        </Animatable.View>

        {/* ✅ Konten Dinamis dari API */}
        {data.map((item, index) => (
          <Animatable.View
            key={item.id}
            animation="fadeInUp"
            delay={800 + 200 * index}
            duration={600}
            style={styles.section}
          >
            <Text style={styles.subtitle}>📌 {item.title}</Text>

            {item.image ? (
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="cover"
                onError={() => console.warn('Gagal memuat gambar', item.image)}
              />
            ) : null}

            <Text style={styles.paragraph}>{item.description}</Text>
            <Text style={styles.bullet}>Kategori: {item.category}</Text>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
              <Button title="Edit" onPress={() => navigation.navigate('EditForm', { article: item })} />
              <Button title="Hapus" onPress={() => handleDelete(item.id)} color="red" />
            </View>
          </Animatable.View>
        ))}

        {/* 🔽 Tombol Tambah di Bawah */}
        <View style={{ marginTop: 30, marginBottom: 40 }}>
          <Button title="➕ Tambahkan Tips Baru" onPress={() => navigation.navigate('Form')} color="#4A90E2" />
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default Training;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.8),
    marginBottom: 12,
  },
  bullet: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
    marginBottom: 6,
    paddingLeft: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
});
