import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

const interests = [
  { topic: 'Photography', description: 'Capturing moments through the lens.' },
  { topic: 'Cooking', description: 'Exploring new recipes and cuisines.' },
  { topic: 'Hiking', description: 'Exploring nature and staying active.' },
  { topic: 'Art', description: 'Creating and appreciating various art forms.' },
  { topic: 'Technology', description: 'Staying up to date with the latest tech trends.' },
  // Add more interests as needed
];

class InterestsScreen extends Component {
  renderInterests() {
    const colorfulBackgrounds = ['#FFD700', '#FFA07A', '#90EE90', '#87CEEB', '#FFB6C1'];

    return interests.map((interest, index) => (
      <TouchableOpacity
        key={index}
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: colorfulBackgrounds[index % colorfulBackgrounds.length],
          width: '90%',
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpacity: 8,
          elevation: 5,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>
          {interest.topic}
        </Text>
        <Text style={{ fontSize: 13, color: '#fff', marginLeft: 10 }}>
          {interest.description}
        </Text>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderInterests()}</ScrollView>
      </View>
    );
  }
}

export default InterestsScreen;
