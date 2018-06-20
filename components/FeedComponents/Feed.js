import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import data from './sample'
import FeedList from './FeedList'
import FeedDetail from './FeedDetail'


export const FeedStack = StackNavigator({
    Feed: {
      screen: FeedList,
      navigationOptions: {
        title: 'Новости',
        headerStyle: {  
          backgroundColor: "#ff7300"
        }
      },
    },
    FeedDetails: {
      screen: FeedDetail,
      navigationOptions: ({ navigation }) => ({
        title: 'Новости',
        headerStyle: {
          backgroundColor: "#ff7300"
        }
      }),
    },
  },{
    navigationOptions: {
    backgroundColor: '#f95631'
    }
  });

FeedStack.navigationOptions = {
  headerStyle: {
    backgroundColor: 'red'
}
}



