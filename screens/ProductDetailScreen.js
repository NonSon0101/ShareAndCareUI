import { Image, SafeAreaView, StyleSheet, ScrollView, Text, Pressable, View, Button, Modal, RefreshControl } from "react-native";
import ProductFooter from "../components/footer/ProductFooter";
import RateIcon from "../components/icons/RateIcon";
import RightArrowIcon from "../components/icons/RightArrowIcon";
import ProductRating from "../components/Item/ProductRating";
import { useCallback, useState } from "react";

export default function ProductDetailScreen({ route, navigation }) {
    const { image, name, price, description, rating } = route.params;

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 1000);
    }, []);

    const [opacity, setOpacity] = useState(1);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
        setOpacity(0.5);
    };

    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
        setOpacity(1);
    };
    return (
        <SafeAreaView style={{ flex: 1, opacity}}>
            <ScrollView 
                style={styles.itemStyles}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={onRefresh} 
                    />
                }
            >
                <Image style={styles.image} source={image}/>

                <SafeAreaView style={styles.imageContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <Image style={styles.otherImage} source={require('../assets/images/image1.png')}/>
                        <Image style={styles.otherImage} source={require('../assets/images/image2.png')}/>
                        <Image style={styles.otherImage} source={require('../assets/images/image3.png')}/>
                        <Image style={styles.otherImage} source={require('../assets/images/image4.png')}/>
                        <Image style={styles.otherImage} source={require('../assets/images/image5.png')}/>
                    </ScrollView>
                </SafeAreaView>

                <SafeAreaView style={styles.itemContainer}>
                    <Text style={styles.itemName}>{JSON.stringify(name).replace(/"/g, "")}</Text>
                    <Text style={styles.itemName}>{JSON.stringify(price)}</Text>
                    <SafeAreaView style={styles.statisticContainer}>
                        <SafeAreaView style={[styles.rowContainer, {paddingRight: 20}]}>
                            <RateIcon color={'#FFC300'}/>
                            <Text style={styles.statisticText}>{JSON.stringify(rating)}</Text>
                        </SafeAreaView>
                        <SafeAreaView style={[styles.rowContainer, {paddingLeft: 20, borderLeftWidth: 0.5}]}>
                            <Text style={styles.statisticText}>Sold: 1</Text>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
                
                <Pressable
                    style={[styles.detailContainer, {flexDirection: 'row'}]}
                    onPress={handleOpenBottomSheet}
                >
                    <Text style={styles.title}>Product Detail</Text>
                    <RightArrowIcon/>
                </Pressable>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isBottomSheetOpen}
                    onRequestClose={handleCloseBottomSheet}
                >
                    <SafeAreaView 
                        style={styles.modalContainer}
                    >
                        <View style={styles.modalContent}>
                            <Button title="Click" onPress={handleCloseBottomSheet}>OK</Button>
                        </View>
                    </SafeAreaView>
                </Modal>
                
                <Pressable style={[styles.detailContainer, {flexDirection: 'column', alignItems: 'flex-start'}]}>
                    <Text style={[styles.title, {marginBottom: 10}]}>Product Description</Text>
                    <Text style={styles.contentText}>{JSON.stringify(description).replace(/"/g, "")}</Text>
                </Pressable>

                <ProductRating rating={JSON.stringify(rating)} />
            </ScrollView>
            <SafeAreaView style={{ position: 'absolute', bottom: 0 }}>
                <ProductFooter/>
            </SafeAreaView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        maxHeight: 350
    },
    imageContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        marginVertical: 10
    },
    otherImage: {
        width: 80,
        maxHeight: '100%',
        marginHorizontal: 5
    },
    itemStyles: {
        display: 'flex',
        marginVertical: 40,
        overflow: 'hidden',
    },
    itemContainer: {
        marginHorizontal: 5
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5
    },
    statisticContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statisticText: {
        fontSize: 16,
        marginHorizontal: 5,
    },
    detailContainer: {
        width: '100%',
        backgroundColor: '#E8E8E8',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    contentText: {
        fontSize: 16,
    },
    moreText: {
        fontSize: 16,
        color: '#38A59F'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        height: '50%',
    }
});
