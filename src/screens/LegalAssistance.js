import React, { useState, useRef } from 'react';
import { View, Text, Image, ScrollView, Pressable, Animated, StyleSheet, Dimensions, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For arrow icons
import Footer from '../components/Footer';


const categories = [
    { title: 'Family Law', image: require('../../assets/family.jpeg') },
    { title: 'Consumer Rights', image: require('../../assets/Consumer.jpeg') },
    { title: 'Women Rights', image: require('../../assets/women.jpeg') },
    { title: 'Child Empowerment Rights', image: require('../../assets/child.jpeg') },
    { title: 'Property Law', image: require('../../assets/property.jpeg') },
    { title: 'Criminal Law', image: require('../../assets/criminal.jpeg') },
    { title: 'Environmental Law', image: require('../../assets/environment.jpeg') },
    { title: 'Corporate Law', image: require('../../assets/Corporate.jpeg') },
    { title: 'Constitutional Law', image: require('../../assets/constitute.jpeg') },
    { title: 'International Law', image: require('../../assets/International.jpeg') },
];

const LegalAssistance = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const scrollViewRef = useRef(null);

    // Animated value for zoom effect
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleCategorySelect = (category) => {
        navigation.navigate('Chatbot', { category });
    };

    const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

    const scrollTo = (direction) => {
        if (scrollViewRef.current) {
            const offset = direction === 'down' ? 200 : -200; // Increased scroll distance for more movement
            scrollViewRef.current.scrollTo({ y: offset, animated: true });
        }
    };

    return (
        <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
            {/* Dark/Light mode toggle switch */}
            <View style={styles.switchContainer}>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                    thumbColor={isDarkMode ? '#ff4d4d' : '#ccc'}
                    trackColor={{ false: '#767577', true: '#ff4d4d' }}
                />
            </View>

            <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
                Virtual Legal Assistant :
                Empowering You with Legal Knowledge!!
            </Text>

            <View style={styles.scrollContainer}>
                {/* Left Arrow */}
                <Pressable onPress={() => scrollTo('up')} style={styles.arrowButton}>
                    <Ionicons name="arrow-up" size={30} color={isDarkMode ? '#fff' : '#000'} />
                </Pressable>

                {/* Vertical Scrollable Categories */}
                <ScrollView
                    ref={scrollViewRef}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.categoryColumn}
                    style={styles.scrollView}
                    scrollEnabled={true} // Enable scroll
                >
                    {categories.map((category, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <Pressable
                                key={index}
                                onPress={() => handleCategorySelect(category.title)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onTouchStart={() => setHoveredIndex(index)}
                                onTouchEnd={() => setHoveredIndex(null)}
                                style={[styles.categoryCard, isHovered ? styles.zoomedIn : {}, isDarkMode ? styles.darkCard : styles.lightCard, isHovered ? styles.hoveredBorder : isDarkMode ? styles.darkBorder : styles.lightBorder]}
                            >
                                <Image source={category.image} style={styles.categoryImage} />
                                <Text style={[styles.cardTitle, isDarkMode ? styles.darkText : styles.lightText]}>
                                    {category.title}
                                </Text>
                            </Pressable>
                        );
                    })}
                </ScrollView>

                {/* Right Arrow */}
                <Pressable onPress={() => scrollTo('down')} style={styles.arrowButton}>
                    <Ionicons name="arrow-down" size={30} color={isDarkMode ? '#fff' : '#000'} />
                </Pressable>
            </View>
        </View>
    );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    modeText: {
        fontSize: 16,
        fontWeight: '600',
    },
    darkContainer: {
        backgroundColor: '#000',
    },
    lightContainer: {
        backgroundColor: '#fff',
    },
    darkText: {
        color: '#fff',
    },
    lightText: {
        color: '#000',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    arrowButton: {
        padding: 10,
        zIndex: 1,
    },
    scrollView: {
        height: height - 200, // Reduced height to allow for arrows and scrollable space
        flex: 1,
    },
    categoryColumn: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    categoryCard: {
        width: 500, // Increased size for each category tab
        height: 440, // Increased size for the category tab
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 12,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ scale: 1 }], // For floating effect
        transition: 'transform 0.7s ease', // Smooth hover effect
    },
    zoomedIn: {
        transform: [{ scale: 1.1 }], // Scale up the category card on hover
    },
    hoveredBorder: {
        borderColor: '#ff4d4d', // Bright border color on hover
        borderWidth: 3,
    },
    darkCard: {
        backgroundColor: '#333',
    },
    lightCard: {
        backgroundColor: '#f8f8f8',
    },
    darkBorder: {
        borderColor: '#ff4d4d',
        borderWidth: 2,
    },
    lightBorder: {
        borderColor: '#ccc',
        borderWidth: 2,
    },
    categoryImage: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
    },
});

export default LegalAssistance;
