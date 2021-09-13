import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigation from '../navigation/appNavigation/homeStack/index';
import {storageConst, routes} from '../constants';
import {navigationRef, navigate} from './RootNavigation';

const MainStack = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={routes.auth}>
        <MainStack.Screen
          screenOptions={{headerShown: false}}
          name={routes.home}
          component={HomeNavigation}
          options={{
            gestureEnabled: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
