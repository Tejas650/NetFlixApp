import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from 'react-native-elements';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';

const Login = ({navigation}) => {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        setLoading(false);
      }

      if (user) {
        navigation.navigate('Profile');
      }
    });

    return unsubscribe;
  }, []);

  const singIn = () => {
    signInWithEmailAndPassword(auth, input, password).then(userCredentials => {
      console.log(userCredentials);
      const user = userCredentials.user;
      console.log(user.email);
      alert('Logged In Successfully!');
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
      }}>
      <KeyboardAvoidingView>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 15,
                fontWeight: '500',
              }}>
              Loading
            </Text>
            <ActivityIndicator size="large" color={'red'} />
          </View>
        ) : (
          <>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{height: 50, width: 120, marginTop: 20}}
                source={{
                  uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png',
                }}
              />
            </View>

            <View style={{width: 320, marginTop: 45}}>
              <Input
                value={input}
                onChangeText={text => setInput(text)}
                type="email"
                inputContainerStyle={{borderBottomWidth: 0}}
                placeholder="Email"
                placeholderTextColor={'white'}
                style={{
                  width: 330,
                  padding: 15,
                  borderRadius: 5,
                  color: 'white',
                  backgroundColor: 'gray',
                }}
              />
              <Input
                value={password}
                onChangeText={text => setPassword(text)}
                type="password"
                secureTextEntry={true}
                inputContainerStyle={{borderBottomWidth: 0}}
                placeholder="Password"
                placeholderTextColor={'white'}
                style={{
                  width: 330,
                  padding: 15,
                  borderRadius: 5,
                  color: 'white',
                  backgroundColor: 'gray',
                }}
              />
            </View>

            <Pressable
              onPress={singIn}
              style={
                password.length > 6
                  ? {
                      width: 300,
                      backgroundColor: 'red',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 14,
                    }
                  : {
                      width: 300,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: 'white',
                      borderWidth: 2,
                      padding: 14,
                    }
              }>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 19,
                  fontWeight: '700',
                  color: 'white',
                }}>
                Sign In
              </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 19,
                  fontWeight: '600',
                  marginTop: 15,
                }}>
                New to Netflix? Sign up now
              </Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
