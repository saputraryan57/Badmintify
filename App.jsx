import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Training, Profile } from './src/screens';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: () => {
            let emoji;
            if (route.name === 'Home') {
              emoji = '🏠︎';
            } else if (route.name === 'Training') {
              emoji = '🏋🏽';
            } else if (route.name === 'Profile') {
              emoji = '👤';
            }
            return <Text style={{ fontSize: 18 }}>{emoji}</Text>;
          },
          tabBarLabel: route.name,
          tabBarActiveTintColor: '#3558E1',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Training" component={Training} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
