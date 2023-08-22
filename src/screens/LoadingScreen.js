import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 15,
            fontWeight: '500',
            marginBottom: 10,
          }}>
          Loading
        </Text>
        <ActivityIndicator size="large" color={'red'} />
      </View>
    </View>
  );
};

export default LoadingScreen;
