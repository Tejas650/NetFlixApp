import {StripeProvider} from '@stripe/stripe-react-native';
import {StatusBar} from 'react-native';
import React from 'react';
import StackNavigator from './StackNavigator';
import stripeConfig from './stripeConfig';
import {ProfileContext} from './Context';

const App = () => {
  return (
    <>
      <ProfileContext>
        <StripeProvider publishableKey={stripeConfig.publishableKey}>
          <StackNavigator />
          <StatusBar style="auto" />
        </StripeProvider>
      </ProfileContext>
    </>
  );
};

export default App;
