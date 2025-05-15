import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { fontType, colors } from '../../theme';

const AddBlogForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    username: '',
    address: '',
    phoneNumber: '',
    imageUrl: '',
    category: {},
  });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const categoryOptions = [
    { id: 1, name: 'Ganda Putra' },
    { id: 2, name: 'Tunggal Putra' },
    { id: 3, name: 'Tunggal Putri' },
    { id: 4, name: 'Ganda Putri' },
    { id: 5, name: 'Ganda Campuran' },
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.title}>Form Data Pribadi</Text>
        </View>
      </View>

      {/* Form */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={inputStyle.borderDashed}>
          <TextInput
            placeholder="Nama Lengkap"
            value={formData.fullName}
            onChangeText={text => handleChange('fullName', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={inputStyle.text}
          />
        </View>

        <View style={inputStyle.borderDashed}>
          <TextInput
            placeholder="Tanggal Lahir"
            value={formData.birthDate}
            onChangeText={text => handleChange('birthDate', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={inputStyle.text}
          />
        </View>

        <View style={inputStyle.borderDashed}>
          <TextInput
            placeholder="Username"
            value={formData.username}
            onChangeText={text => handleChange('username', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={inputStyle.text}
          />
        </View>

        <View style={inputStyle.borderDashed}>
          <TextInput
            placeholder="Alamat"
            value={formData.address}
            onChangeText={text => handleChange('address', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={inputStyle.text}
          />
        </View>

        <View style={inputStyle.borderDashed}>
          <TextInput
            placeholder="No. Telepon"
            value={formData.phoneNumber}
            onChangeText={text => handleChange('phoneNumber', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={inputStyle.text}
            keyboardType="phone-pad"
          />
        </View>

        {/* Field untuk Foto Profil */}
        <View style={inputStyle.borderDashed}>
          <TextInput
            placeholder="Image URL (Foto Profil)"
            value={formData.imageUrl}
            onChangeText={text => handleChange('imageUrl', text)}
            placeholderTextColor={colors.grey(0.6)}
            style={inputStyle.text}
          />
        </View>

        {/* Kategori */}
        <View style={inputStyle.borderDashed}>
          <Text style={categoryStyle.title}>Kategori</Text>
          <View style={categoryStyle.container}>
            {categoryOptions.map((item, index) => {
              const isSelected = item.id === formData.category.id;
              const bgColor = isSelected ? colors.black() : colors.grey(0.08);
              const color = isSelected ? colors.white() : colors.grey();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleChange('category', item)}
                  style={[categoryStyle.item, { backgroundColor: bgColor }]}>
                  <Text style={[categoryStyle.name, { color: color }]}>{item.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Tombol Submit */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Data Dikirim:', formData)}>
          <Text style={styles.buttonLabel}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBlogForm;

    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.black(),
  },
  bottomBar: {
    backgroundColor: '#ffffff',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.blue(),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
});

const inputStyle = StyleSheet.create({
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.4),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
    padding: 0,
  },
});

const categoryStyle = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(0.6),
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#E0FFFF',
  },
  name: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
  },
});

