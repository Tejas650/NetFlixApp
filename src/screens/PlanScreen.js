import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import plan from '../../data/plan';
import Fontisto from 'react-native-vector-icons/Fontisto';

const PlanScreen = ({route}) => {
  const data = plan;

  return (
    <ScrollView style={{marginTop: 50, marginBottom: 20}}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          Choose the plan that is right for you
        </Text>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Feather name="check" size={24} color="#e50914" />
          <Text style={{marginLeft: 6, fontSize: 16, fontWeight: '600'}}>
            Watch all you want Ad free
          </Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
          <Feather name="check" size={24} color="#e50914" />
          <Text style={{marginLeft: 6, fontSize: 16, fontWeight: '600'}}>
            Recommendations just for you
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name="check" size={24} color="#e50914" />
          <Text style={{marginLeft: 6, fontSize: 16, fontWeight: '600'}}>
            Cancel your plan anytime
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          {data.map((item, index) => (
            <Pressable
              style={{
                height: 160,
                borderRadius: 7,
                borderColor: '#e50914',
                borderWidth: 0.5,
                padding: 15,
                margin: 10,
              }}
              key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    backgroundColor: '#e50914',
                    padding: 10,
                    width: 120,
                    borderRadius: 7,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    {item.name}
                  </Text>
                </View>

                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  Price: ₹{item.price}
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{color: 'gray', fontSize: 15, fontWeight: '500'}}>
                    Video Quality : {item.videoQuality}
                  </Text>
                  <Text style={{fontSize: 16, fontWeight: '500', marginTop: 3}}>
                    Resolution : {item.resolution}
                  </Text>
                </View>
                <Fontisto
                  style={{marginRight: 6}}
                  name="netflix"
                  size={28}
                  color="#111"
                />
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 16}}>Devices You can watch On : </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {item.devices.map(device => (
                    <Fontisto
                      style={{marginRight: 6}}
                      name={device.name}
                      size={27}
                      color="#e50914"
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PlanScreen;

const styles = StyleSheet.create({});
