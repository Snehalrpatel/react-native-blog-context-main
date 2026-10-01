import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnotherScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Another Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
});

export default AnotherScreen;
