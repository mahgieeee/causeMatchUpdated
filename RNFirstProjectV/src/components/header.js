import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    padding: 20,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});