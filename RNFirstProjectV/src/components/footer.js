import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved, 2023{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
