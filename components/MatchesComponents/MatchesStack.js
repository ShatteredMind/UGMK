import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, ListView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import data from './MatchesData'
import MatchesNavigator from './MatchesNavigator';
import MatchesDetails from './MatchesDetails'


export const MatchesStack = StackNavigator({
    Tabs: {
      screen: MatchesNavigator ,
      navigationOptions : {
        title: 'Все Матчи',
        headerStyle: {
            backgroundColor: '#ff7300',
        }
    }
    },
    MatchesDetails: {
      screen: MatchesDetails,
      navigationOptions: ({ navigation }) => ({
        title: 'Детали матча',
        headerStyle: {
          backgroundColor: "#ff7300"
        }
      }),
    },
  }, {
    
});