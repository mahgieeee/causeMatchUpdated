/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import AccountScreen from './src/screens/AccountScreen';
import MenuScreen from './src/screens/Menu'
import WelcomeScreen from './src/screens/WelcomeScreen'

//Components
import HeaderApp from './src/components/header';
import Footer from './src/components/footer';

import {AuthContextProvider} from './src/context/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator ();

function LogoTitle(){
  return (
    <Image
      source = {require('./src/img/cause_match_home_logo.jpg')}
      style = {{
        height: 40,
        width : 300,
        resizeMode: 'contain',
        alignSelf: 'center',
      }} 
    />
  )
}

const App: () => Node = () => {


  const isDarkMode = useColorScheme() === 'dark';

  return (

    <NavigationContainer>

      //container for bottom tabs: home, menu
     <NavigationContainer>
     <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Welcome') {
          iconName = focused ? 'md-information-circle' : 'md-information-circle-outline';
        } else if (route.name === 'Menu') {
          iconName = 'md-list';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Welcome" component={WelcomeScreen} />
    <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
    </NavigationContainer>
    //end of container for bottom tabs 

    //container for stack Welcome Screen with logo as title 
    <View style={styles.container}>
      //header component
      <HeaderApp />
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: '#333333'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Stack.Screen
          name="Welcome" 
          component={WelcomeScreen} 
          options={{
            title: 'Home',
            headerTitle: (props) => <LogoTitle {...props} />,
          }} 
        />
      </Stack.Navigator> // end container for Welcome Screen 

    //footer component
    </View>
    <View style={styles.footerContainer}>
      <Footer />
    </View>
    //end footer component

    //autho stack container to login 
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
      </AuthContextProvider>
    </SafeAreaView> //end of auth0 stack container 

    //stack for Menu Screen when you login 
    <Stack.Navigator>
    <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator> // end of Menu Screen
    
    //stack for Menu Screen when you login
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Drawer.Navigator
	    useLegacyImplementation
        screenOptions={{ drawerPosition: “right” }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
      </Drawer.Navigator>   
    </Stack.Navigator> // end of Menu Screen
    
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

export default App;