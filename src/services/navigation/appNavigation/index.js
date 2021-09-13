import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {header, routes, headers} from '../../constants';
import * as App from '../../../screens/mainFlow';
import filter from '../../../screens/mainFlow/filter/index'

const AppStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={headers.screenOptions}
      initialRouteName={routes.app}>
      <AppStack.Screen
        name={routes.app}
        component={App.Home}
        options={{
          headerShown: false,
          //title: 'Sign In'
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
