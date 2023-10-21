import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import TagSearch from '../components/interestsandacc';

class TagSearchScreen extends Component {
  state = {
    interests: [],
    accomplishments: [],
    interestInput: '',
    accomplishmentInput: '',
  };

  addInterest = () => {
    const { interests, interestInput } = this.state;
    if (interestInput) {
      this.setState({ interests: [...interests, interestInput], interestInput: '' });
    }
  };

  addAccomplishment = () => {
    const { accomplishments, accomplishmentInput } = this.state;
    if (accomplishmentInput) {
      this.setState({ accomplishments: [...accomplishments, accomplishmentInput], accomplishmentInput: '' });
    }
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Tag Search" />
        </Appbar.Header>

        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <TextInput
                  placeholder="Add interests..."
                  onChangeText={(text) => this.setState({ interestInput: text })}
                  value={this.state.interestInput}
                />
              </Card.Content>
              <Card.Actions>
                <Button
                  title="Add Interest"
                  onPress={this.addInterest}
                  color="#aaa" // Light gray color for the button
                />
              </Card.Actions>
            </Card>

            <FlatList
              data={this.state.interests}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Card style={styles.card}>
                  <Card.Content>
                    <Text>{item}</Text>
                  </Card.Content>
                </Card>
              )}
            />
          </View>

          <View style={styles.column}>
            <Card style={styles.card}>
              <Card.Content>
                <TextInput
                  placeholder="Add accomplishments..."
                  onChangeText={(text) => this.setState({ accomplishmentInput: text })}
                  value={this.state.accomplishmentInput}
                />
              </Card.Content>
              <Card.Actions>
                <Button
                  title="Add Accomplishment"
                  onPress={this.addAccomplishment}
                  color="#aaa" // Light gray color for the button
                />
              </Card.Actions>
            </Card>

            <FlatList
              data={this.state.accomplishments}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Card style={styles.card}>
                  <Card.Content>
                    <Text>{item}</Text>
                  </Card.Content>
                </Card>
              )}
            />
          </View>
        </View>

        <TagSearch
          interests={this.state.interests}
          accomplishments={this.state.accomplishments}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  column: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    borderRadius: 10,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  card: {
    marginBottom: 16,
  },
});

export default TagSearchScreen;
