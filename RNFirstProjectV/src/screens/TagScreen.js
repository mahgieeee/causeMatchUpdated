import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { Appbar, Card, FAB } from 'react-native-paper'; // Import components from react-native-paper
import TagSearch from '../components/tagsearch';

class TagSearchScreen extends Component {
  state = {
    tags: [],
    matches: [],
    tagInput: '',
  };

  addTag = () => {
    const { tags, tagInput } = this.state;
    if (tagInput) {
      this.setState({ tags: [...tags, tagInput], tagInput: '' });
    }
  };

  generateMatches = () => {
    // Implement match generation logic here
  };

  render() {
    return (
      <View>
        <Appbar.Header> 
          <Appbar.Content title="Tag Search" />
        </Appbar.Header>

        <Card style={{ margin: 16 }}> 
          <Card.Content>
            <TextInput
              placeholder="Add tags..."
              onChangeText={(text) => this.setState({ tagInput: text })}
              value={this.state.tagInput}
            />
          </Card.Content>
          <Card.Actions>
            <Button title="Add Tag" onPress={this.addTag} />
          </Card.Actions>
        </Card>

        <FlatList
          data={this.state.tags}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={{ margin: 16 }}> 
              <Card.Content>
                <Text>{item}</Text>
              </Card.Content>
            </Card>
          )}
        />

        <FlatList
          data={this.state.matches}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={{ margin: 16 }}> 
              <Card.Content>
                <Text>{item}</Text>
              </Card.Content>
            </Card>
          )}
        />

    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tag Search Screen</Text>
      <TagSearch />
    </View>

      </View>
    );
  }
}

export default TagSearchScreen;
