import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Home from './screens/Home';
import Profile from './screens/Profile';
import Contact from './screens/Contact';
import Calculator from './screens/Calculator';

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
      
       <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          tabBarLabel: 'Calculator',
          tabBarIcon: ({ color }) => (
            <AntDesign name="calculator" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigation} options={{title: 'Home'}}/>
        <Drawer.Screen name="Profile" component={TabNavigation} options={{title: 'Profile'}} />
        <Drawer.Screen name="Contact" component={TabNavigation} options={ {title: 'Contact'}} />
        <Drawer.Screen name="Calculator" component={TabNavigation} options={ { title: 'Calculator'}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
