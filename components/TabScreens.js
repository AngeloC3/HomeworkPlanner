import React, {useEffect} from 'react';
import { SafeAreaView, LogBox} from 'react-native';   //LogBox.ignoreAllLogs(); Ignore all log notifications
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'; // https://ionic.io/ionicons
import SafeViewAndroid from "./SafeViewAndroid.js";
import {useValue} from './ValueProvider.js';

//import { } from 'react-native';
import HomeScreen from './HomeScreen.js';
import StackCMScreens from './StackCMScreens.js';
import AboutScreen from './AboutScreen.js';
import SettingsScreen from './SettingsScreen.js';
import {getTheme} from './AsyncStore.js';


const Tab = createBottomTabNavigator();
LogBox.ignoreAllLogs() // ignores logs 
const StackScreens = () => {
   const {currentValue, setCurrentValue} = useValue();
   const theme = currentValue;
   const setTheme = setCurrentValue;
   useEffect(() => {getTheme(setTheme)}
           ,[])

  return (

    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <NavigationContainer
        theme={theme}
       >
        <Tab.Navigator
            //initialRouteName="Settings"
            screenOptions={{
                              tabBarActiveTintColor: theme.colors.tabActive,
                              tabBarInactiveTintColor: theme.colors.text,
                              tabBarActiveBackgroundColor: theme.colors.primary,
                              tabBarInactiveBackgroundColor: theme.colors.lighterPrim,
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
              headerShown: false,
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
    </SafeAreaView>
  );
};

export default StackScreens;
