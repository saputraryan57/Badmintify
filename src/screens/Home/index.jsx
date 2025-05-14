import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const CategoryList = [
  {id: 1, categoryName: 'Training'},
  {id: 2, categoryName: 'Community'},
  {id: 3, categoryName: 'Equipment'},
  {id: 4, categoryName: 'Techniques'},
];

const BlogList = [
  {
    id: 1,
    category: 'Training',
    title: 'Latihan Smash Kuat',
    description: 'Teknik dasar untuk meningkatkan power smash.',
    image:
      'https://i.pinimg.com/736x/8b/d2/45/8bd245124780eba250dd0d8d3e46deae.jpg',
  },
  {
    id: 2,
    category: 'Community',
    title: 'Gabung Klub Badminton',
    description: 'Temukan komunitas badminton di kota kamu.',
    image:
      'https://i.pinimg.com/736x/d5/c4/ad/d5c4ada176711f55baab85b3e4153326.jpg',
  },
  {
    id: 3,
    category: 'Equipment',
    title: 'Memilih Raket yang Tepat',
    description: 'Panduan memilih raket sesuai gaya bermain.',
    image:
      'https://i.pinimg.com/736x/c2/14/57/c21457cbb7c1a2c76962441fe4b177ef.jpg',
  },
  {
    id: 4,
    category: 'Techniques',
    title: 'Footwork yang Efektif',
    description: 'Pergerakan kaki yang optimal untuk kontrol permainan.',
    image:
      'https://i.pinimg.com/736x/f5/8a/f8/f58af8632e4e2f8f7fe3fcd3454580d5.jpg',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Badmintify 🏸</Text>
          <Text style={styles.subtitle}>Temukan inspirasi badminton</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Cari tips badminton..."
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        {/* Kategori (horizontal scroll) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollContainer}>
          {CategoryList.map((cat, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{cat.categoryName}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Blog List */}
        {BlogList.map(item => (
          <View key={item.id} style={styles.hobbyCard}>
            <Image source={{uri: item.image}} style={styles.hobbyImage} />
            <View style={styles.hobbyContent}>
              <Text style={styles.hobbyCategory}>{item.category}</Text>
              <Text style={styles.hobbyTitle}>{item.title}</Text>
              <Text style={styles.hobbyDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1434A4',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoryScrollContainer: {
    paddingVertical: 10,
    paddingRight: 10,
  },
  categoryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryText: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hobbyCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  hobbyImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  hobbyContent: {
    padding: 12,
  },
  hobbyCategory: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: 'bold',
  },
  hobbyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginVertical: 5,
  },
  hobbyDescription: {
    color: '#6B7280',
    fontSize: 14,
},
});