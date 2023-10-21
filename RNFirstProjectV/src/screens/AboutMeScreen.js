import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AboutMeScreen = () => {
  const [bio, setBio] = useState('');
  const [editable, setEditable] = useState(false);
  const [savedBio, setSavedBio] = useState('');

  useEffect(() => {
    // Load the user's bio when the component mounts.
    loadBio();
  }, []);

  const handleSaveBio = async () => {
    try {
      await AsyncStorage.setItem('userBio', bio);
      setSavedBio(bio);
      setEditable(false);
    } catch (error) {
      // Handle errors while saving the bio.
      console.error(error);
    }
  };

  const loadBio = async () => {
    try {
      const storedBio = await AsyncStorage.getItem('userBio');
      if (storedBio) {
        setSavedBio(storedBio);
        setBio(storedBio);
      }
    } catch (error) {
      // Handle errors while loading the bio.
      console.error(error);
    }
  };

  const handleEditBio = () => {
    setEditable(true);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About Me</Text>
      {editable ? (
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={bio}
          onChangeText={(text) => setBio(text)}
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            marginVertical: 10,
          }}
        />
      ) : (
        <Text style={{ marginTop: 10, fontSize: 16 }}>
          {savedBio ? savedBio : 'No bio available'}
        </Text>
      )}

      {editable ? (
        <Button
          title="Save"
          onPress={handleSaveBio}
          color="#007BFF" // Set the button's background color
        />
      ) : (
        <Button
          title="Edit"
          onPress={handleEditBio}
          color="#007BFF" // Set the button's background color
        />
      )}
    </View>
  );
};

export default AboutMeScreen;
