import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import TrendingComponent from '../components/TrendingComponent';
import MovieRows from '../components/MovieRows';

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: 'black', marginTop: 34}}>
      <Header />

      <TrendingComponent />

      <MovieRows />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
