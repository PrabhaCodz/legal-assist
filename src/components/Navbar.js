import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: 'black',
    },
    navText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Navbar;
