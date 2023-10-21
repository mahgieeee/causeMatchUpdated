import React, {Component} from 'react';
import {View, ScrollView, TouchableHighlight, TouchableOpacity, Image, Text, Platform, Share} from 'react-native';

class Home extends Component{
    tryMatch = () => {
        let text = " Hello, you are getting matched with volunteers near you";
    
        Share.share({
            subect:'Hi user',
            title: 'Volunteering App',
            message:text,
        },{
            //Android
            dialogTitle:'Please try this out !!!',
            //IOS
            excludedActivityTypes:[]
        })
    }

    // Function to navigate to another screen
    navigateToOtherScreen = () => {
    const { navigation } = this.props; // This assumes that you pass navigation as a prop
    // Navigate to the desired screen using its name
    navigation.navigate('Interest'); // Replace 'OtherScreen' with the actual screen name
    }

    // Function to navigate to another screen
    navigateToTag = () => {
        const { navigation } = this.props; // This assumes that you pass navigation as a prop
        // Navigate to the desired screen using its name
        navigation.navigate('Tag'); // Replace 'OtherScreen' with the actual screen name
    }

    // Function to navigate to another screen
    navigateToMe = () => {
        const { navigation } = this.props; // This assumes that you pass navigation as a prop
        // Navigate to the desired screen using its name
        navigation.navigate('AboutMe'); // Replace 'OtherScreen' with the actual screen name
    }


    render(){
        return(
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{padding:10, width:'100%', backgroundColor:'#000', height:150}}>
                        <TouchableOpacity>
                            <Image source = {require('../img/back.jpg')}
                            style = {{width:30, height:30}}></Image>
                            <View></View>
                            <View></View>
                        </TouchableOpacity>
                    </View>

                    <View style={{alignItems:'center'}}>
                        <Image source = {require('../img/cause_match_home_logo.jpg')} style = {{width: 140, height:140,
                        borderRadius:100, marginTop:-70}}></Image>
                        <Text style = {{
                            fontSize: 25,
                            fontWeight: 'bold', 
                            padding: 10
                        }}>Username</Text>

                        <Text style = {{
                            fontSize: 15,
                            fontWeight: 'bold', 
                            color: 'grey'
                        }}>25, Male</Text>
                    </View>

                    <TouchableOpacity style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }} onPress={this.navigateToMe}>
                        <Image source={require('../img/work.png')} style={{width:20, height:20, resizeMode: 'contain'}}></Image>
                        <Text style = {{
                            fontSize:15,
                            color:'#818181',
                            fontWeight:'bold',
                            marginLeft:10,
                        }}>Product Designer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}>
                        <Image source={require('../img/location.png')} style={{width:20, height:20, resizeMode: 'contain'}}></Image>
                        <Text style = {{
                            fontSize:15,
                            color:'#818181',
                            fontWeight:'bold',
                            marginLeft:10,
                        }}>Location</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20
                    }}onPress={this.navigateToOtherScreen}>
                        <Image source={require('../img/interests.png')} style={{width:20, height:20, resizeMode: 'contain'}}></Image>
                        <Text style = {{
                            fontSize:15,
                            color:'#818181',
                            fontWeight:'bold',
                            marginLeft:10,
                        }}>Interests</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20,
                    }} onPress={this.navigateToTag}>
                        <Image source={require('../img/trymatch.png')} style={{width:20, height:20, resizeMode: 'contain'}}></Image>
                        <Text style = {{
                            fontSize:15,
                            color:'#818181',
                            fontWeight:'bold',
                            marginLeft:10,
                        }}>Match Me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'center',
                        backgroundColor:'#fff',
                        width:'90%',
                        padding:20,
                        paddingBottom:22,
                        borderRadius:10,
                        shadowOpacity:80,
                        elevation:15,
                        marginTop:20,
                        marginBottom:150,
                        backgroundColor: '#000'
                    }}>
                        <Text style = {{
                            fontSize:15,
                            color:'#fff',
                            fontWeight:'bold',
                            marginLeft:10,
                        }}>Logout</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

        );
    }
}

export default Home;
