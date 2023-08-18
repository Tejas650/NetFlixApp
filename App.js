import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Movie from './src/components/Movie';
import StackNavigator from './StackNavigator';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <StackNavigator />
    </>
  );
};

export default App;
