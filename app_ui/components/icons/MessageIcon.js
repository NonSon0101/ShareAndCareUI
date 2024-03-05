import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function MessageIcon() {
    return (
        <View style={styles.container}>
            <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M21 11.2386C21.0034 12.5285 20.6951 13.8009 20.1 14.9522C19.3944 16.3319 18.3098 17.4923 16.9674 18.3036C15.6251 19.1148 14.0782 19.5448 12.5 19.5454C11.1801 19.5488 9.87812 19.2474 8.7 18.6659L3 20.5227L4.9 14.9522C4.30493 13.8009 3.99656 12.5285 4 11.2386C4.00061 9.69624 4.44061 8.18449 5.27072 6.87269C6.10083 5.5609 7.28825 4.50087 8.7 3.81134C9.87812 3.22979 11.1801 2.92843 12.5 2.93179H13C15.0843 3.04417 17.053 3.90394 18.5291 5.34649C20.0052 6.78904 20.885 8.713 21 10.75V11.2386Z"
                    stroke="#858585"
                    wid stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24
    },
});
