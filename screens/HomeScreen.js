import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState, useContext, } from 'react';
import { Text, SafeAreaView, Image, ScrollView, FlatList, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import AcquisitionItem from '../components/AcquisitionItem/index.js';
import CategoryItem from '../components/CategoryItem/index.js';
import HeaderButton from '../components/HeaderButton/index.js';

import Product from '../components/Item/Product.js';
import Footer from '../components/footer/Footer.js';

export default function HomeScreen() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SafeAreaView style={{ height: "25%" }}>
        <SafeAreaView className="flex-row">
          <Image
            source={require('../assets/images/logo.png')}
            style={{ width: 248, height: 47, position: 'absolute', top: 50 }}
          />

          <HeaderButton icon={<Feather name="search" size={24} color="black" />} />
          <HeaderButton icon={<Ionicons name="notifications" size={24} color="black" />} />
          <HeaderButton icon={<Ionicons name="reorder-three" size={24} color="black" />} />

        </SafeAreaView>
        <SafeAreaView style={{}}>
          <SafeAreaView style={{}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <AcquisitionItem children="Shirt" />
              <AcquisitionItem children="Tshirt" />
              <AcquisitionItem children="Jacket" />
              <AcquisitionItem children="Blouse" />
              <AcquisitionItem children="Dress" />
              <AcquisitionItem children="Shorts" />
              <AcquisitionItem children="Pants" />
              <AcquisitionItem children="Skirt" />
              <AcquisitionItem children="Sweater" />
              <AcquisitionItem children="Jeans" />

            </ScrollView>
          </SafeAreaView>

          <SafeAreaView style={{}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <CategoryItem children="Filter" />
              <CategoryItem children="Distance" />
              <CategoryItem children="Free" />
              <CategoryItem children="Buy" />
              <CategoryItem children="Borrow" />
              <CategoryItem children="Rent" />
            </ScrollView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>

      <ScrollView style={{}}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </ScrollView>

      <SafeAreaView style={{ position: 'absolute', bottom: -8 }}>
        <Footer />
      </SafeAreaView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({

}); 
