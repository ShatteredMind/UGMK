import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import Switch from './Switch'


export const SettingsStack = StackNavigator({
    Settings: {
      screen: Switch,
      navigationOptions: {
        title: 'Настройки',
        backgroundColor: '#f95631'
      },
    }, 
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ff7730'
      }
    }
  });



