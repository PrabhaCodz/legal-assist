// src/components/CategoryCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryCard = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 3,
        marginVertical: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
    },
    cardContent: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default CategoryCard;
