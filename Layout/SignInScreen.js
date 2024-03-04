import { StyleSheet, View, Image, Text } from "react-native";
import { useState } from "react";
import InputField from "../components/InputField.js";
import Option from "../components/Option.js";
import ButtonLogin from "../components/Button1.js";
import SignUp from "../components/SignUp.js";
import ForgotPassword from "./ForgotPassword.js";
import CreateAccount from "./CreateAccount.js";

export default function SignInScreen() {
    const [isOpenForgotPassword, setIsOpenForgotPassword] = useState(false);
    const [isOpenCreateAccount, setIsOpencCreateAccount] = useState(false);
    function setOpenForgotPassword() {
        setIsOpenForgotPassword(true);
    }
    function setCloseForgotPassword() {
        setIsOpenForgotPassword(false);
    }

    function setOpenCreateAccount() {
        setIsOpencCreateAccount(true);
    }
    function setCloseCreateAccount() {
        setIsOpencCreateAccount(false);
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/Image/logo.png")}
                />
            </View>
            <View style={styles.signin_container}>
                <Text style={styles.text}>Sign in to your account</Text>

                <InputField
                    source={require("../assets/Image/icons-user.png")}
                    placeHolder="Enter username"
                    isShowed={false}
                />
                <InputField
                    source={require("../assets/Image/icons-lock.png")}
                    placeHolder="Enter password"
                    isShowed={true}
                />
                <Option isOpen={setOpenForgotPassword} />
                <ButtonLogin content="Sign in to S&C" />
                <SignUp isOpen={setOpenCreateAccount} />
            </View>
            <ForgotPassword isOpen={isOpenForgotPassword} isClose={setCloseForgotPassword} />
            <CreateAccount isOpen={isOpenCreateAccount} isClose={setCloseCreateAccount} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: "10%",
        justifyContent: "center",
    },
    header: {
        marginVertical: '8%',
        marginLeft: '5%',
    },

    signin_container: {
        marginHorizontal: '5%'
    },

    text: {
        fontSize: 20,
        fontWeight: '600'
    }
});
