import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  View,
  StyleSheet,
} from "react-native";
import { getAllProduct } from "../API/Product/index.js";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../store/auth-context.js";
import AcquisitionItem from "../components/AcquisitionItem/index.js";
import CategoryItem from "../components/CategoryItem/index.js";
import HeaderButton from "../components/HeaderButton/index.js";

import Product from "../components/Item/Product.js";
import Footer from "../components/footer/Footer.js";

export default function HomeScreen({ navigation }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchAllProduct() {
      try {
        const products = await getAllProduct();
        setProductList(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchAllProduct();
  }, []);


  function openDrawerHandler() {
    navigation.openDrawer();
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "25%",
          zIndex: 9999,
          backgroundColor: "#fff",
          paddingVertical: 8,
        }}
      >
        <SafeAreaView style={styles.header}>
          <Image source={require("../assets/images/logo.png")} />

          <View style={styles.headerAction}>
            <HeaderButton
              icon={<Feather name="search" size={30} color="black" />}
            />
            <HeaderButton
              icon={<Ionicons name="notifications" size={30} color="black" />}
            />
            <HeaderButton
              icon={<Ionicons name="reorder-three" size={30} color="black" />}
              onPress={openDrawerHandler}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={{}}>
          <SafeAreaView style={styles.acquisitionStyles}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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

          <SafeAreaView style={styles.categoriesStyles}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <CategoryItem children="Filter" />
              <CategoryItem children="Distance" />
              <CategoryItem children="Free" />
              <CategoryItem children="Buy" />
              <CategoryItem children="Borrow" />
              <CategoryItem children="Rent" />
            </ScrollView>
          </SafeAreaView>
        </SafeAreaView>
      </View>

      <ScrollView style={styles.listItem}>
        {productList.map((product) => (
          <Product key={product._id} ProductName={product.product_name} Owner='Duy' Image={require('../assets/images/product4.png')} />
        ))}
      </ScrollView>

      <SafeAreaView style={{ position: "absolute", bottom: -24 }}>
        <Footer />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flex: 0,
    marginTop: 20,
    marginBottom: 70,
    marginHorizontal: 24,
    height: "55%",
    overflow: "hiden",
  },
  categoriesStyles: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justify: "center",
    flexDirection: "row",
  },

  acquisitionStyles: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justify: "center",
    flexDirection: "row",
  },
  header: {
    flex: 4,
    marginTop: 33,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
