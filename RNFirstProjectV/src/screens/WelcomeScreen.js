import * as React from 'react'; 
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'; 
import { withTheme } from "react-native-paper";

const WelcomeScreen = ({ navigation }) => { 
    return ( 
        <View style={styles.container}> 
            <Image 
                style={styles.logo} 
                source={require('../img/cause_match_home_logo.jpg')} 
            /> 

            <Text style={styles.title}> 
                Matchmaking for Volunteers
            </Text>

            <Pressable onPress={() => navigation.navigate('Profile')}> 
            <Text style={styles.buttonText}>View Profile</Text> 
            </Pressable> 
        </View> 
); 
};  

const styles = StyleSheet.create({
    logo: {
       height: 300,
       width: 300,
       resizeMode: 'contain',
       alignSelf: 'center',
    },
    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff',
    },
  
    title: {
      marginTop: 16,
      paddingVertical: 10,
      color: '#333333',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },

    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
    },

  });

export default withTheme(WelcomeScreen);