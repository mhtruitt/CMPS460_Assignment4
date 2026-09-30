// screens/AboutScreen.js
// A static info screen. Replace the placeholder values below (YOUR NAME
// and YOUR COURSE NAME) with your actual details before submitting.

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// TODO: replace these two placeholders with your own info
const AUTHOR_NAME = 'Your Name';
const COURSE_NAME = 'Your Course Name';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.card}>
        <Text style={styles.appName}>ShopEase</Text>

        <Text style={styles.description}>
          ShopEase is a simple React Native app that demonstrates multi-screen
          navigation — browsing a list of products, viewing details for a
          selected item, and passing data between screens.
        </Text>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>Created by</Text>
          <Text style={styles.value}>{AUTHOR_NAME}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Course</Text>
          <Text style={styles.value}>{COURSE_NAME}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  appName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1B1F3B',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAF0',
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    color: '#1B1F3B',
    fontWeight: '600',
  },
});
