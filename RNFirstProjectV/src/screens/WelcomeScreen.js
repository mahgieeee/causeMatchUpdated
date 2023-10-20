import * as React from 'react'; 
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'; 

const WelcomeScreen = ({ navigation }) => { 
    return ( 
        <View style={styles.container}> 
            <Image 
                style={styles.logo} 
                source={require('../img/cause_match_home_logo.jpg')} 
            /> 

            <Text style={styles.title}> 
                Your matchmaking volunteering app.
            </Text>

            <Pressable onPress={() => navigation.navigate('Menu')}> 
            <Text style={styles.buttonText}>View Menu</Text> 
            </Pressable> 
        </View> 
); 
};  

const styles = StyleSheet.create({
    logo: {
       height: 100,
       width: 300,
       resizeMode: 'contain',
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