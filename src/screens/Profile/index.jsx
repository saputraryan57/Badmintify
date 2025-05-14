import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { colors, fontType } from '../../theme';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Image
            source={require('../../assets/kevinsanjaya.jpg')}
            style={styles.profileImage}
        />
        <Text style={styles.name}>Kevin Sanjaya Sukamuljo</Text>
        <Text style={styles.origin}>Indonesia</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailSection}>
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
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
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
});
