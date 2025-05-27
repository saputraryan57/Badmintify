import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { Home, Training, Profile, AddBlogForm } from '../screens';

import FormScreen from '../screens/Training/FormScreen';
import EditFormScreen from '../screens/Training/EditFormScreen';

import { fontType, colors } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.blue(),
        tabBarInactiveTintColor: colors.black(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 6,
          height: 65,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: fontType['Pjs-Medium'],
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 18 }}>{'🏠'}</Text>
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color, fontFamily: fontType['Pjs-Medium'] }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 18 }}>{'🏋🏽'}</Text>
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color, fontFamily: fontType['Pjs-Medium'] }}>
              Training
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 18 }}>{'👤'}</Text>
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 10, color, fontFamily: fontType['Pjs-Medium'] }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />

      {/* Halaman Tambah Blog (mungkin tidak perlu jika tidak digunakan) */}
      <Stack.Screen
        name="AddBlog"
        component={AddBlogForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />

      {/* ✅ Tambahan halaman Form dan EditForm untuk Training */}
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={{
          title: 'Tambah Tips',
          headerShown: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="EditForm"
        component={EditFormScreen}
        options={{
          title: 'Edit Tips',
          headerShown: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
