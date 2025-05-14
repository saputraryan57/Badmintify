import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, fontType } from '../../theme';

const Training = () => {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Training Tips</Text>
  
        <View style={styles.section}>
          <Text style={styles.subtitle}>💥 Smash Kuat</Text>
          <Text style={styles.paragraph}>
            Smash adalah senjata utama dalam permainan badminton. Berikut beberapa latihan untuk meningkatkan kekuatan smash kamu:
          </Text>
          <Text style={styles.bullet}>• Latihan rotasi bahu dengan dumbbell ringan.</Text>
          <Text style={styles.bullet}>• Perkuat pergelangan tangan dengan wrist curls.</Text>
          <Text style={styles.bullet}>• Praktikkan posisi tubuh saat melakukan jump smash.</Text>
        </View>
  
        <View style={styles.section}>
          <Text style={styles.subtitle}>🦶 Latihan Kaki</Text>
          <Text style={styles.paragraph}>
            Kaki yang kuat dan gesit sangat penting untuk menjangkau semua area lapangan:
          </Text>
          <Text style={styles.bullet}>• Latihan footwork 6 titik di lapangan.</Text>
          <Text style={styles.bullet}>• Skipping selama 15 menit setiap hari.</Text>
        </View>
  
        <View style={styles.section}>
          <Text style={styles.subtitle}>💪 Daya Tahan</Text>
          <Text style={styles.paragraph}>
            Daya tahan akan membuat kamu tetap kuat dan fokus hingga akhir pertandingan:
          </Text>
          <Text style={styles.bullet}>• Jogging selama 30 menit, 3 kali seminggu.</Text>
          <Text style={styles.bullet}>• Latihan interval dengan shuttle run.</Text>
        </View>
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
  });