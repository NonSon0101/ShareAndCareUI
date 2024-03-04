import { StyleSheet, View, Modal, Image, Text, Pressable } from 'react-native';
import ButtonLogin from '../components/Button1'
import InputField from '../components/InputField'
import buttonlogin from '../components/Button1';

export default function ForgotPassword(props) {
    return (
        <Modal visible={props.isOpen} animationType="slide">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable onPress={props.isClose}>
                        <Image style={styles.header__image} source={require("../assets/Image/icons-back-arrow.png")} />
                    </Pressable>
                    <Text style={styles.header__content}>Reset Password</Text>
                </View>
                <View>
                    <Text style={styles.notify}>At least 9 character, with uppercase and lowercase letter.</Text>
                    <InputField placeHolder="Enter User Name" isShowed={false} source={require("../assets/Image/icons-user.png")} />
                    <InputField placeHolder="Enter Password" isShowed={true} source={require("../assets/Image/icons-lock.png")} />
                    <InputField placeHolder="Confirm Password" isShowed={true} source={require("../assets/Image/icons-lock.png")} />
                    <ButtonLogin content="Reset password" />
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
    },

    header__image: {
        marginRight: 8,
        width: 35
    },

    header__content: {
        fontSize: 20,
        fontWeight: '700'
    },

    notify: {
        marginTop: 16,
        marginBottom: 32,
        marginHorizontal: 9,
        width: '70%',
        color: '#ccc'
    }
});