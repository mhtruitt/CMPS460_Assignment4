// screens/ProductsScreen.js
// Displays the list of products. Each card shows the name, price, and a
// "View Details" button that navigates to the Details screen, passing the
// full product object along as a route param.

import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import products from '../data/products';

export default function ProductsScreen({ navigation }) {
  // Renders a single product card.
  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      </View>

      {/*
        KEY PART: navigating to Details and passing the whole product
        object as a route param. The Details screen reads this back via
        `route.params`.
      */}
      <Pressable
        style={styles.detailsButton}
        onPress={() => navigation.navigate('Details', { product: item })}
      >
        <Text style={styles.detailsButtonText}>View Details</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },
  cardInfo: {
    marginBottom: 14,
  },
  productName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1B1F3B',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 15,
    color: '#4A55A2',
    fontWeight: '600',
  },
  detailsButton: {
    backgroundColor: '#4A55A2',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
