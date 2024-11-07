import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import LegalAssistance from './src/screens/LegalAssistance';
import Chatbot from './src/screens/Chatbot';
import Onboarding from './src/screens/Onboarding';
import Profile from './src/screens/Profile';
import Navbar from './src/components/Navbar'; // Importing Navbar component

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen 
                    name="Onboarding" 
                    component={Onboarding} 
                    options={{ title: 'Welcome' }} 
                />
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ 
                        title: 'Home',
                        header: () => <Navbar /> // Using Navbar in Home screen
                    }} 
                />
                <Stack.Screen 
                    name="LegalAssistance" 
                    component={LegalAssistance} 
                    options={{ 
                        title: 'Legal Assistance',
                        header: () => <Navbar /> // Using Navbar in Legal Assistance screen
                    }} 
                />
                <Stack.Screen 
                    name="Chatbot" 
                    component={Chatbot} 
                    options={{ 
                        title: 'Chatbot',
                        header: () => <Navbar /> // Using Navbar in Chatbot screen
                    }} 
                />
                <Stack.Screen 
                    name="Profile" 
                    component={Profile} 
                    options={{ 
                        title: 'Profile',
                        header: () => <Navbar /> // Using Navbar in Profile screen
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
