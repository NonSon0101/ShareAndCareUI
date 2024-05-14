import {
    Alert,
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    Pressable,
    View,
    Button,
    Modal,
    RefreshControl,
} from "react-native";
import ProductFooter from "../components/footer/ProductFooter";
import RateIcon from "../components/icons/RateIcon";
import RightArrowIcon from "../components/icons/RightArrowIcon";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";
import ProductRating from "../components/Item/ProductRating";
import { useCallback, useEffect, useState } from "react";
import { getProductById } from "../API/Product";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "../util/common";

export default function ProductDetailScreen({ route }) {
    const { source, id, image, name, price, attributes, description, rating } =
        route.params;

    const navigation = useNavigation();

    const [refreshing, setRefreshing] = useState(false);
    const [productDetail, setProductDetail] = useState();

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        try {
            const product = await getProductById(id);
            setProductDetail(product);
        } catch (error) {
        } finally {
            setRefreshing(false);
        }
    }, [id]);

    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    const itemTextWithoutFontWeight = {
        ...styles.itemText,
        fontWeight: undefined,
    };

    useEffect(() => {
        async function fetchProductDetail() {
            try {
                const product = await getProductById(id);
                setProductDetail(product);
            } catch (error) {
            }
        }
        fetchProductDetail();
    }, [id]);

    if (source === "HomePageScreen") {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Pressable
                    style={{ marginTop: 50, marginLeft: 20 }}
                    onPress={() =>
                        navigation.goBack("Home")
                    }
                >
                    <LeftArrowIcon />
                </Pressable>
                <ScrollView
                    style={styles.itemStyles}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <Image style={styles.image} source={{ uri: image }} />

                    <SafeAreaView style={styles.imageContainer}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image1.png")}
                            />
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image2.png")}
                            />
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image3.png")}
                            />
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image4.png")}
                            />
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image5.png")}
                            />
                        </ScrollView>
                    </SafeAreaView>

                    <SafeAreaView style={styles.itemContainer}>
                        <Text style={styles.itemText}>
                            {JSON.stringify(name).replace(/"/g, "")}
                        </Text>
                        <Text style={styles.itemText}>{formatCurrency(price)}</Text>
                        <SafeAreaView style={styles.statisticContainer}>
                            <SafeAreaView style={[styles.rowContainer, { paddingRight: 20 }]}>
                                <RateIcon color={"#FFC300"} />
                                <Text style={styles.statisticText}>
                                    {JSON.stringify(rating)}
                                </Text>
                            </SafeAreaView>
                            <SafeAreaView
                                style={[
                                    styles.rowContainer,
                                    { paddingLeft: 20, borderLeftWidth: 0.5 },
                                ]}
                            >
                                <Text style={styles.statisticText}>Sold: 1</Text>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>

                    <Pressable
                        style={[styles.detailContainer, { flexDirection: "row" }]}
                        onPress={handleOpenBottomSheet}
                    >
                        <Text style={styles.title}>Product Detail</Text>
                        <RightArrowIcon />
                    </Pressable>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isBottomSheetOpen}
                        onRequestClose={handleCloseBottomSheet}
                    >
                        <SafeAreaView style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Button title="Close" onPress={handleCloseBottomSheet} />

                                <View style={styles.detailContent}>
                                    <Text style={styles.itemText}>Brand: </Text>
                                    <Text style={itemTextWithoutFontWeight}>
                                        {attributes.brand}
                                    </Text>
                                </View>

                                <View style={styles.detailContent}>
                                    <Text style={styles.itemText}>Size: </Text>
                                    <Text style={itemTextWithoutFontWeight}>
                                        {attributes.size}
                                    </Text>
                                </View>

                                <View style={styles.detailContent}>
                                    <Text style={styles.itemText}>Material: </Text>
                                    <Text style={itemTextWithoutFontWeight}>
                                        {attributes.material}
                                    </Text>
                                </View>
                            </View>
                        </SafeAreaView>
                    </Modal>

                    <Pressable
                        style={[
                            styles.detailContainer,
                            { flexDirection: "column", alignItems: "flex-start" },
                        ]}
                    >
                        <Text style={[styles.title, { marginBottom: 10 }]}>
                            Product Description
                        </Text>
                        <Text style={styles.contentText}>
                            {JSON.stringify(description).replace(/"/g, "")}
                        </Text>
                    </Pressable>

                    <ProductRating productId={id} rating={JSON.stringify(rating)} />
                </ScrollView>
                <SafeAreaView style={{ position: "absolute", bottom: 0 }}>
                    <ProductFooter />
                </SafeAreaView>
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Pressable
                    style={{ marginTop: 50, marginLeft: 20 }}
                    onPress={() =>
                        navigation.navigate("Home")
                    }
                >
                    <LeftArrowIcon />
                </Pressable>
                <ScrollView
                    style={styles.itemStyles}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    <Image style={styles.image} source={image} />

                    <SafeAreaView style={styles.imageContainer}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image1.png")}
                            />
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image2.png")}
                            />
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image3.png")}
                            />
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image4.png")}
                            />
                            <Image
                                style={styles.otherImage}
                                source={require("../assets/images/image5.png")}
                            />
                        </ScrollView>
                    </SafeAreaView>

                    <SafeAreaView style={styles.itemContainer}>
                        <Text style={styles.itemText}>{productDetail?.product_name}</Text>
                        <Text style={styles.itemText}>{productDetail?.product_price}</Text>
                        <SafeAreaView style={styles.statisticContainer}>
                            <SafeAreaView style={[styles.rowContainer, { paddingRight: 20 }]}>
                                <RateIcon color={"#FFC300"} />
                                <Text style={styles.statisticText}>
                                    {productDetail?.product_ratingAverage}
                                </Text>
                            </SafeAreaView>
                            <SafeAreaView
                                style={[
                                    styles.rowContainer,
                                    { paddingLeft: 20, borderLeftWidth: 0.5 },
                                ]}
                            >
                                <Text style={styles.statisticText}>Sold: 1</Text>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>

                    <Pressable
                        style={[styles.detailContainer, { flexDirection: "row" }]}
                        onPress={handleOpenBottomSheet}
                    >
                        <Text style={styles.title}>Product Detail</Text>
                        <RightArrowIcon />
                    </Pressable>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isBottomSheetOpen}
                        onRequestClose={handleCloseBottomSheet}
                    >
                        <SafeAreaView style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Button title="Close" onPress={handleCloseBottomSheet} />

                                <View style={styles.detailContent}>
                                    <Text style={styles.itemText}>Brand: </Text>
                                    <Text style={itemTextWithoutFontWeight}>
                                        {productDetail?.product_attributes.brand}
                                    </Text>
                                </View>

                                <View style={styles.detailContent}>
                                    <Text style={styles.itemText}>Size: </Text>
                                    <Text style={itemTextWithoutFontWeight}>
                                        {productDetail?.product_attributes.size}
                                    </Text>
                                </View>

                                <View style={styles.detailContent}>
                                    <Text style={styles.itemText}>Material: </Text>
                                    <Text style={itemTextWithoutFontWeight}>
                                        {productDetail?.product_attributes.material}
                                    </Text>
                                </View>
                            </View>
                        </SafeAreaView>
                    </Modal>

                    <Pressable
                        style={[
                            styles.detailContainer,
                            { flexDirection: "column", alignItems: "flex-start" },
                        ]}
                    >
                        <Text style={[styles.title, { marginBottom: 10 }]}>
                            Product Description
                        </Text>
                        <Text style={styles.contentText}>
                            {productDetail?.product_description}
                        </Text>
                    </Pressable>

                    <ProductRating
                        productId={id}
                        rating={productDetail?.product_ratingAverage}
                    />
                </ScrollView>
                <SafeAreaView style={{ position: "absolute", bottom: 0 }}>
                    <ProductFooter />
                </SafeAreaView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        maxHeight: 350,
    },
    imageContainer: {
        flexDirection: "row",
        width: "100%",
        height: 80,
        marginVertical: 10,
    },
    otherImage: {
        width: 80,
        maxHeight: "100%",
        marginHorizontal: 5,
    },
    itemStyles: {
        display: "flex",
        overflow: "hidden",
    },
    itemContainer: {
        marginHorizontal: 5,
    },
    itemText: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 5,
    },
    statisticContainer: {
        flexDirection: "row",
        marginVertical: 10,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    statisticText: {
        fontSize: 16,
        marginHorizontal: 5,
    },
    detailContainer: {
        width: "100%",
        backgroundColor: "#E8E8E8",
        justifyContent: "space-between",
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    contentText: {
        fontSize: 16,
    },
    moreText: {
        fontSize: 16,
        color: "#38A59F",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
    },
    detailContent: {
        flexDirection: "row",
        marginVertical: 10,
    },
});
