import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const Profile = () => {
    const handleLogout = () => {
        Alert.alert('Logged out!');
    };

    return (
        <View>
            <Text>Your Profile</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default Profile;
