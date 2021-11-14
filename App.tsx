import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// app deps
import { CardContainer } from './src/screens/CardContainer/CardContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <CardContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
