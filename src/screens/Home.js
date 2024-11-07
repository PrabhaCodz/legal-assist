// src/screens/Home.js
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import Footer from '../components/Footer';

const Home = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/homebackground.jpg')} // Ensure the path to your background image is correct
            style={styles.background}
            resizeMode="cover" // Ensures the background covers the screen
        >
            <View style={styles.overlay}>
                {/* White box behind title and subtitle */}
                <View style={styles.textBox}>
                    <Text style={styles.title}>WELCOME TO LEGAL ASSISTANCE APP</Text>
                    <Text style={styles.subtitle}>Your trusted source for legal help and guidance.</Text>
                </View>

                <Button
                    title="Legal Assist"
                    onPress={() => navigation.navigate('LegalAssistance')}
                    color="#ff4d4d"
                    style={styles.button}
                />
            </View>

            {/* Fixed Footer */}
            <View style={styles.fixedFooter}>
                <Footer />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    textBox: {
        backgroundColor: 'white', // White background box
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android shadow
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '300',
        color: 'black',
        textAlign: 'center',
    },
    button: {
        width: '80%',
        backgroundColor: '#ff4d4d',
        padding: 15,
        borderRadius: 8,
        marginBottom: 30,
    },
    fixedFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default Home;
