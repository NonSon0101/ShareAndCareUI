import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default function AcquisitionItem({ onPress, children }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        flexDirection: 'row',
        paddingLeft: 12,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40, // For rounded-3xl equivalent
        backgroundColor: '#A6A6A6',
    },
    text: {
        marginVertical: 4,
        fontWeight: 'bold',
        fontSize: 16, // For text-base equivalent
        color: 'white',
    },
});
