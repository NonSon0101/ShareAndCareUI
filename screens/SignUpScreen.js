import { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/auth-context";
import { useNavigation } from '@react-navigation/native';
import { auth } from "../API/auth";
export default function SignUpScreen() {
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const handleSignUp = async ({ mode, email, password }) => {
    try {
      const response = await auth({ mode, email, password });
      if (response.user) {
        authCtx.authenticate({ email: response.user });
        navigation.navigate("OTPScreen");
      }
    } catch (error) {
      console.error("Signup error:", error.stack);
      Alert.alert(
        "Signup Failed",
        "Please check your credentials and try again."
      );
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/images/logo copy.png")} />
        </View>
        <AuthContent onAuthenticate={handleSignUp} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    justifyContent: "center",
  },
  header: {
    marginVertical: "8%",
    marginLeft: "5%",
  },
});