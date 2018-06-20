import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import { users } from './data';
import UserList from './UserList'
import TeamDetail from './TeamDetail'


export const UserStack = StackNavigator({
    Team: {
      screen: UserList,
      navigationOptions: {
        title: 'Команда',
        backgroundColor: '#f95631'
      },
    },
    TeamDetail: {
      screen: TeamDetail,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name_ru.toUpperCase()}`,
        backgroundColor: '#f95631'
      }),
    }, 
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ff7730'
      }
    }
  });



