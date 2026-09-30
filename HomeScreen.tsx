// screens/HomeScreen.js
// The landing screen. Its job is simple: introduce the app and let the
// user navigate to Products or About using React Navigation's
// `navigation.navigate()`.

import React from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Application title */}
        <Text style={styles.title}>ShopEase</Text>

        {/* Short welcome message */}
        <Text style={styles.welcome}>
          Welcome! Browse our featured products or learn more about this app below.
        </Text>

        {/* Navigates to the Products screen */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Products')}
        >
          <Text style={styles.buttonText}>View Products</Text>
        </Pressable>

        {/* Navigates to the About screen */}
        <Pressable
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>About</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1B1F3B',
    marginBottom: 12,
  },
  welcome: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#4A55A2',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#EEF0FB',
  },
  secondaryButtonText: {
    color: '#4A55A2',
  },
});
