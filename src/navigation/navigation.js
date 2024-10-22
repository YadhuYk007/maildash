import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HOME, ONBOARDING, SIGNUP} from '../constants/screennames';
import Onboarding from '../screens/onboarding/Onboarding';
import Signup from '../screens/onboarding/Signup';
import Home from '../screens/landing/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ONBOARDING}
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SIGNUP}
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;