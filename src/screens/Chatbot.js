import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chatbot from '../components/Chatbot';

const ChatbotScreen = ({ route }) => {
    const { category } = route.params; // Get category from navigation parameters

    return (
        <View style={styles.container}>
            <Chatbot category={category} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default ChatbotScreen;
