// src/screens/Onboarding.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Onboarding = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Legal Assistance!</Text>
            <Text style={styles.subtitle}>
                Navigate through categories, ask questions, and explore legal insights!
            </Text>
            <Button
                title="Get Started"
                onPress={() => navigation.replace('Home')} // Replaces onboarding with the Home screen
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default Onboarding;
