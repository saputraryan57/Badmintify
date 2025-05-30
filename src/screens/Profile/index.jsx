import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Edit } from 'iconsax-react-native';
import { colors, fontType } from '../../theme';
import * as Animatable from 'react-native-animatable';
import { collection, getFirestore, onSnapshot, orderBy, query } from '@react-native-firebase/firestore';

const Profile = () => {
  const navigation = useNavigation();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, 'trainings'), orderBy('createdAt', 'desc'));

    const unsub = onSnapshot(q, (snapshot) => {
      const data = [];
      snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setHistory(data);
    });

    return () => unsub();
  }, []);

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Animatable.View animation="fadeInUp" duration={600}>
          {/* Header */}
          <Animatable.View animation="fadeInDown" duration={600} style={styles.header}>
            <Image
              source={require('../../assets/kevinsanjaya.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Kevin Sanjaya Sukamuljo</Text>
            <Text style={styles.origin}>Indonesia</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profil</Text>
            </TouchableOpacity>
          </Animatable.View>

          {/* Informasi Pribadi */}
          <Animatable.View
            animation="fadeInUp"
            delay={300}
            duration={600}
            style={styles.detailSection}
          >
            <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Tanggal Lahir:</Text>
              <Text style={styles.value}>2 Agustus 1995</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Username:</Text>
              <Text style={styles.value}>@kevinsj95</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>Alamat:</Text>
              <Text style={styles.value}>Bandung, Jawa Barat</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.label}>No. Telepon:</Text>
              <Text style={styles.value}>+62 812 3456 7890</Text>
            </View>
          </Animatable.View>

          {/* Riwayat Training */}
          <Animatable.View
            animation="fadeInUp"
            delay={400}
            duration={600}
            style={styles.detailSection}
          >
            <Text style={styles.sectionTitle}>Riwayat Tips yang Ditambahkan</Text>
            {history.length === 0 ? (
              <Text style={styles.label}>Belum ada tips ditambahkan.</Text>
            ) : (
              history.map((item, index) => (
                <View key={item.id} style={styles.detailItem}>
                  <Text style={styles.value}>📌 {item.title}</Text>
                  <Text style={styles.label}>Kategori: {item.category}</Text>
                </View>
              ))
            )}
          </Animatable.View>
        </Animatable.View>
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddBlog')}
      >
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.grey(0.2),
  },
  name: {
    fontSize: 22,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    textAlign: 'center',
  },
  origin: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.7),
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: colors.grey(0.05),
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
  },
  detailSection: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: colors.grey(0.1),
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
    marginBottom: 15,
  },
  detailItem: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.6),
  },
  value: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
  },
  floatingButton: {
    backgroundColor: colors.blue(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
