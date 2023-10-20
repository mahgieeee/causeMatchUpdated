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
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// Navigation
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import AccountScreen from './src/screens/AccountScreen';

import WelcomeScreen from './src/screens/WelcomeScreen'
import ProfileScreen from './src/screens/Profile'
import InterestScreen from './src/screens/Interests'
import MenuScreen from './src/screens/Menu';
import {AuthContextProvider} from './src/context/AuthContext';

//Components
import HeaderApp from './src/components/header';
import Footer from './src/components/footer';
import { Title } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function LogoTitle(){
  const navigation = useNavigation();

  const handleLogoClick = () => {
    // Navigate back to the Welcome screen when the LogoTitle is clicked
    navigation.navigate('Welcome');
  };

  return (
    <Pressable onPress={handleLogoClick} style={styles.headerContainer}>
      <Image
        source={require('./src/img/cause_match_home_logo.jpg')}
        style={{
          height: 40,
          width: 300,
          resizeMode: 'contain',
        }}
      />
    </Pressable>
  );
}

const App: () => Node = () => {
  return(
    
    <NavigationContainer>

      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: '#333333'},
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          }
        }}>
        <Stack.Screen
          name="Welcome" 
          component={WelcomeScreen} 
          options={{
            title: 'Home', 
            headerTitle: (props) => <LogoTitle {...props} />, 
          }} />
        <Stack.Screen name = "Profile" component = {ProfileScreen} />
        <Stack.Screen name = "Interest" component = {InterestScreen} />
      </Stack.Navigator> 
      <Footer />
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
  headerContainer: {
    alignItems: 'center', // Center the Pressable contents
  },
});

export default App;