import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const Chatbot = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const getChatbotResponse = (userInput) => {
        const responses = {
            "hi": "Hello! How can I assist you today?",
            "help": "Sure! I can help with information on various legal topics.",
            "thank you": "You're welcome!",
            "default": "I'm here to help! Could you specify your query?",
        };
        const lowerInput = userInput.toLowerCase();
        return responses[lowerInput] || responses["default"];
    };

    const handleSend = async () => {
        if (input.trim()) {
            // Show user message
            setMessages([...messages, { text: input, sender: 'user' }]);

            try {
                // Send request to Flask backend
                const response = await axios.post('http://127.0.0.1:5000/chat', {
                    message: messages,
                });
                
                // Show bot response
                setMessages((prevMessages) => [...prevMessages, { text: response.data.response, sender: 'bot' }]);
            } catch (error) {
                console.error("Error connecting to backend:", error);
                Alert.alert("Error", "Could not connect to chatbot server.");
            }

            // Clear input
            setInput('');
        }
    };


    const handleAudio = () => {
        Alert.alert("Audio Feature", "Audio recording will be implemented here.");
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const themeStyles = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[styles.container, themeStyles.container]}>
            {/* Top Bar with Back Arrow, Sidebar Toggle, Title, and Dark Mode Switch */}
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={isDarkMode ? "#fff" : "#333"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleSidebar}>
                    <Ionicons name={isSidebarVisible ? "close" : "menu"} size={24} color={isDarkMode ? "#fff" : "#333"} />
                </TouchableOpacity>
                <Text style={themeStyles.title}>Legal Assistant</Text>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
            </View>

            {/* Sidebar */}
            {isSidebarVisible && (
                <View style={[styles.sidebar, themeStyles.sidebar]}>
                    <Text style={themeStyles.sectionTitle}>Recent Conversations</Text>
                    <Text style={themeStyles.sidebarText}>Previous History</Text>
                </View>
            )}

            {/* Main Content Area */}
            <View style={[styles.mainContent, themeStyles.mainContent]}>
                <Text style={themeStyles.heading}>What can I help with?</Text>

                {/* Chat Area */}
                <ScrollView style={styles.chatContainer}>
                    {messages.map((msg, index) => (
                        <Text key={index} style={msg.sender === 'user' ? themeStyles.userMessage : themeStyles.botMessage}>
                            {msg.text}
                        </Text>
                    ))}
                </ScrollView>

                {/* Input Box at the Bottom */}
                <View style={[styles.inputContainer, themeStyles.inputContainer]}>
                    <TouchableOpacity style={styles.iconButton} onPress={handleAudio}>
                        <Ionicons name="mic" size={24} color={isDarkMode ? "#fff" : "#333"} />
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.input, themeStyles.input]}
                        placeholder="Enter your message..."
                        placeholderTextColor={isDarkMode ? "#aaa" : "#888"}
                        value={input}
                        onChangeText={setInput}
                    />
                    <TouchableOpacity style={styles.iconButton} onPress={handleSend}>
                        <Ionicons name="send" size={24} color="#0084ff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// Common styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    sidebar: {
        width: '30%',
        padding: 10,
        borderRightWidth: 1,
    },
    mainContent: {
        flex: 1,
        padding: 20,
    },
    chatContainer: {
        flex: 1,
        padding: 10,
        marginBottom: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    iconButton: {
        paddingHorizontal: 5,
    },
});

// Light mode styles
const lightStyles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
    },
    sidebar: {
        backgroundColor: '#e8e8e8',
    },
    mainContent: {
        backgroundColor: '#ffffff',
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 16,
        marginVertical: 10,
    },
    sidebarText: {
        color: '#333',
    },
    title: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },
    heading: {
        color: '#333',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#0084ff',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e1e1e1',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        color: '#333',
    },
    inputContainer: {
        backgroundColor: '#ffffff',
        borderTopColor: '#ccc',
    },
    input: {
        backgroundColor: '#f1f1f1',
        color: '#333',
    },
});

// Dark mode styles
const darkStyles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
    },
    sidebar: {
        backgroundColor: '#333',
    },
    mainContent: {
        backgroundColor: '#121212',
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: '#eee',
        fontSize: 16,
        marginVertical: 10,
    },
    sidebarText: {
        color: '#aaa',
    },
    title: {
        color: '#eee',
        fontSize: 18,
        fontWeight: 'bold',
    },
    heading: {
        color: '#eee',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#0084ff',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        color: '#eee',
    },
    inputContainer: {
        backgroundColor: '#333',
        borderTopColor: '#555',
    },
    input: {
        backgroundColor: '#555',
        color: '#eee',
    },
});

export default Chatbot;

