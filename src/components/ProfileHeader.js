import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileHeader = ({ username, onLogout }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.username}>Welcome, {username}!</Text>
            <Button title="Logout" onPress={onLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        alignItems: 'center',
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ProfileHeader;
