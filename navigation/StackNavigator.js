import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AddServiceScreen from '../screens/AddServiceScreen';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import EditServiceScreen from '../screens/EditServiceScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddService" component={AddServiceScreen} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
      <Stack.Screen name="EditService" component={EditServiceScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
