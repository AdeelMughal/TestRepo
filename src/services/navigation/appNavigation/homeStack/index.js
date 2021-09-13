import React, {Component, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {header, routes, headers} from '../../../constants';
import * as Home from '../../../../screens/mainFlow';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={headers.screenOptions}>
      <HomeStack.Screen
        name={routes.homeLanding}
        component={Home.Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.productDetail}
        component={Home.ProductDetail}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
