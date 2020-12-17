import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from './SplashScreen';
import Wall from "./Wall";



const AppNavigator = createStackNavigator({

  SplashScreen: {
    screen: SplashScreen
  },
  Wall: {
    screen: Wall,

  },


});

export default createAppContainer(AppNavigator);