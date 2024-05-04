import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";

import AllProduct from "../../Item/AllProduct";
import { getAllProduct } from "../../../API/Product/index.js";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function AllProductItem() {
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

  const navigation = useNavigation();
  const [freeProduct, setFreeProduct] = useState(true);

  let transactionState = [];

  if (freeProduct) transactionState.push(styles.freeStyle);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.rowContainer}>
        <Text style={styles.transaction}>All Products</Text>
      </SafeAreaView>
      {productList.map((product, index) => {
        if (index % 2 === 0) {
          // Render the first product in the row
          return (
            <SafeAreaView key={index} style={styles.rowContainer}>
              <AllProduct
                image={require("../../../assets/images/image2_.png")}
                name={product.product_name}
                price={product.product_price}
                rating={product.product_ratingsAverage}
                onPress={() =>
                  navigation.navigate("ProductDetail", {
                    image: require("../../../assets/images/image2_.png"),
                    name: product.product_name,
                    price: product.product_price,
                    description: product.product_description,
                    rating: product.product_ratingsAverage,
                  })
                }
              />
              {productList[index + 1] && (
                <AllProduct
                  key={productList[index + 1]._id}
                  image={require("../../../assets/images/image2_.png")}
                  name={productList[index + 1].product_name}
                  price={productList[index + 1].product_price}
                  rating={productList[index + 1].product_ratingsAverage}
                  onPress={() =>
                  navigation.navigate("ProductDetail", {
                    image: require("../../../assets/images/image2_.png"),
                    name: productList[index + 1].product_name,
                    price: productList[index + 1].product_price,
                    description: productList[index + 1].product_description,
                    rating: productList[index + 1].product_ratingsAverage,
                  })
                }
                />
              )}
            </SafeAreaView>
          );
        }
        return null;
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
    padding: 10,
    marginVertical: 5,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  transaction: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
