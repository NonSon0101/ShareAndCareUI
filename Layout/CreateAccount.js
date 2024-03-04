import { StyleSheet, Modal, View, Text, Pressable, Image } from "react-native";
import ButtonLogin from '../components/Button1';
import InputField from '../components/InputField.js';

export default function (props) {
    return (
        <Modal visible={props.isOpen} animationType="slide">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable onPress={props.isClose}>
                        <Image style={styles.header__img_back} source={require("../assets/Image/icons-back-arrow.png")} />
                    </Pressable>
                    <Image style={styles.header__img_logo} source={require("../assets/Image/logo.png")} />

                </View>
                <View style={styles.input_container}>
                    <Text style={styles.text}>Create your account</Text>
                    <InputField placeHolder="Enter User Name" isShowed={false} source={require("../assets/Image/icons-user.png")} />
                    <InputField placeHolder="Enter Password" isShowed={true} source={require("../assets/Image/icons-lock.png")} />
                    <InputField placeHolder="Confirm Password" isShowed={true} source={require("../assets/Image/icons-lock.png")} />
                    <ButtonLogin content="Sign up" />
                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        marginHorizontal: '5%'
    },

    header__img_logo: {
        marginVertical: 16,
    },

    text: {
        fontSize: 20,
        fontWeight: '700',
    },

    input_container: {
        marginTop: 16
    }

})