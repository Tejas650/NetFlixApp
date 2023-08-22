import {StripeProvider} from '@stripe/stripe-react-native';
import {StatusBar} from 'react-native';
import React from 'react';
import StackNavigator from './StackNavigator';
import stripeConfig from './stripeConfig';

const App = () => {
  return (
    <>
      <StripeProvider publishableKey={stripeConfig.publishableKey}>
        <StackNavigator />
        <StatusBar style="auto" />
      </StripeProvider>
    </>
  );
};

export default App;
