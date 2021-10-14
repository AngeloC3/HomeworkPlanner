import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'; // https://ionic.io/ionicons

//import { } from 'react-native';
import HomeScreen from './HomeScreen.js';
import StackCMScreens from './StackCMScreens.js';
import AboutScreen from './AboutScreen.js';
import SettingsScreen from './SettingsScreen.js';

const Tab = createBottomTabNavigator();

const StackScreens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false,
                                      tabBarActiveTintColor: 'blue',
                                      tabBarInactiveTintColor: 'black',
                                      tabBarActiveBackgroundColor: "#87ceeb",
                                      tabBarInactiveBackgroundColor: "lightblue",
                                    }}
      >
        <Tab.Screen name="Home" component={HomeScreen}
            options={() => ({
            tabBarIcon: () => {
              return <Ionicons name="home" />;
            },
          })}
        />
        <Tab.Screen name="Class Management" component={StackCMScreens}
            options={() => ({
            tabBarIcon: () => {
              return <Ionicons name="create" />;
            },
          })}
        />
        <Tab.Screen name="About" component={AboutScreen}
            options={() => ({
            tabBarIcon: () => {
              return <Ionicons name="information-circle" />;
            },
          })}
        />
        <Tab.Screen name="Settings" component={SettingsScreen}
            options={() => ({
            tabBarIcon: () => {
              return <Ionicons name="cog" />;
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StackScreens;
