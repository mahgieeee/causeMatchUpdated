import React, { Component } from 'react';
import { View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native';

// Sample user data with preferences
const userProfiles = [
  { id: 1, name: 'User1', preferences: 'Interest in sports' },
  { id: 2, name: 'User2', preferences: 'Interest in art' },
  { id: 3, name: 'User3', preferences: 'Interest in technology' },
  // Add more user profiles
];

class TagSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      matches: [],
    };
  }

  calculateSimilarity(input, userProfile) {
    // You can use a similarity metric like Levenshtein distance or cosine similarity here
    // For simplicity, we will assume a random similarity score between 0 and 1.
    return Math.random();
  }

  generateMatches() {
    const { userInput } = this.state;
    const potentialMatches = [];

    for (const profile of userProfiles) {
      const similarity = this.calculateSimilarity(userInput, profile.preferences);
      if (similarity > 0.5) {
        // Consider profiles with similarity > 0.5 as potential matches
        potentialMatches.push(profile);
      }
    }

    // Randomly select, e.g., up to 3 potential matches
    const numRandomMatches = Math.min(3, potentialMatches.length);
    const randomMatches = [];

    for (let i = 0; i < numRandomMatches; i++) {
      const randomIndex = Math.floor(Math.random() * potentialMatches.length);
      randomMatches.push(potentialMatches[randomIndex]);
      potentialMatches.splice(randomIndex, 1);
    }

    this.setState({ matches: randomMatches });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Search for matches"
          onChangeText={(text) => this.setState({ userInput: text })}
        />
        <Button title="Search" onPress={() => this.generateMatches()} />

        <Text>Random Matches:</Text>
        <FlatList
          data={this.state.matches}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text>{item.name}</Text>
              <Text>{item.preferences}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default TagSearch;
