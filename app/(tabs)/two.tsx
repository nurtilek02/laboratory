import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

interface LanguageProps {
  lang: string;
  logo: string;
  experience: string;
}

const langs = [
  {
    id: '1',
    lang: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    experience: 'Опыт: 2 года',
  },
  {
    id: '2',
    lang: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    experience: 'Опыт: Нету',
  },
  {
    id: '3',
    lang: 'Java',
    logo: 'https://upload.wikimedia.org/wikipedia/ru/3/39/Java_logo.svg',
    experience: 'Опыт: Нету',
  },
  {
    id: '4',
    lang: 'C++',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    experience: 'Опыт: Нету',
  },
];

const LanguageItem = ({ lang, logo, experience }: LanguageProps) => (
  <View style={styles.langContainer}>
    <Image source={{ uri: logo }} style={styles.logo} />
    <View style={styles.langInfo}>
      <Text style={styles.langName}>{lang}</Text>
      <Text style={styles.experience}>{experience}</Text>
    </View>
  </View>
);

const LanguagesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        renderItem={({ item }) => (
          <LanguageItem
            lang={item.lang}
            logo={item.logo}
            experience={item.experience}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  langContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  langInfo: {
    flex: 1,
  },
  langName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default LanguagesScreen;
