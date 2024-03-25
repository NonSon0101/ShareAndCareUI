import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = () => {
    const navigation = useNavigation();
    return (
        <Pressable style={profileMenuStyles.button} onPress={() => navigation.navigate("Profile")}>
            <Image source={{ 
                uri: 'https://i.pinimg.com/564x/40/70/d9/4070d9574b34038f45af74f6221ec19a.jpg'}}

                style={profileMenuStyles.image}
                    />
            <View style={{ justifyContent: 'center'}}>
                <Text style={profileMenuStyles.text1}>Duck UI</Text>
                <Text style={profileMenuStyles.text2}>a@gmail.com</Text>
            </View>
        </Pressable>
    )
}

const profileMenuStyles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: '#FFFFFF'
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 16,
      margin: 20
    },
    text1: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    text2: {
      fontSize: 14,
    }
  })

export default MenuScreen;