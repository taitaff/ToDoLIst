import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Картинка на экране приветствия */}
      <Image
        source={{ uri: 'https://sun9-49.userapi.com/impg/LsUuKxMnADL-r9BQVJ2-9n-BqJ2xvJmu7Pl8jA/imEFsiDGShI.jpg?size=736x552&quality=96&sign=59e94a91cb608efce1927b59e5b1965c&type=album' }}  // Внешний URL
        style={styles.image}
        />

      <Text style={styles.welcomeText}>Добро пожаловать в приложение!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEEFA7',
    padding: 20,
  },
  image: {
    width: 250,  // Устанавливаем размеры изображения
    height: 250,
    resizeMode: 'contain',  // Можно использовать 'contain', чтобы изображение оставалось в пределах контейнера
    marginBottom: 20,  // Отступ между картинкой и текстом
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
