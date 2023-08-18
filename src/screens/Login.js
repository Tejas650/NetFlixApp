import {
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black', padding: 10}}>
      <KeyboardAvoidingView>
        <View>
          <Image
            style={{height: 50, width: 120, marginTop: 20}}
            source={{
              uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png',
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
