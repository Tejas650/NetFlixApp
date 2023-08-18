import {StatusBar} from 'react-native';
import React from 'react';
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
