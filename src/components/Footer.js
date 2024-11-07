import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.socialIcons}>
              
            </View>

            <View style={styles.footerText}>
                <Text style={styles.text}>© 2024 Legal Assistance App</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:srprabha17@gmail.com')}>

             
                    <Text style={styles.text}>PRABHAKARAN S R        SADHIQ ALI S      MOHAN S</Text>
                    <Text style={styles.text}>142221104092               14222110106       14222110316    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#333',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    icon: {
        marginHorizontal: 15,
    },
    footerText: {
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 5,
    },
});

export default Footer;
