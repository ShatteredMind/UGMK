import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, ListView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import LeagueNavigator from './LeagueNavigator';
import MatchesDetails from '../MatchesComponents/MatchesDetails'
import QuarterFinal from './QuarterFinal'
import ThirdPlace from './ThirdPlace'
import SemiFinal from './SemiFinal'
import Final from './Final'


export const LeagueStack = StackNavigator({
    LeagueTabs: {
      screen: LeagueNavigator ,
      navigationOptions : {
        title: 'Статистика',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#ff7300',
        }
    }
    },
    LeagueDetails: {
      screen: MatchesDetails,
      navigationOptions: ({ navigation }) => ({
        title: 'Детали матча',
        headerLeft: null,
        headerStyle: {
          backgroundColor: "#ff7300"
        }
      }),
    },
    QuarterFinal: {
      screen: QuarterFinal,
      navigationOptions : {
        title: 'Четверть финал',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#ff7300',
        }
    }
    },
    SemiFinal: {
      screen: SemiFinal ,
      navigationOptions : {
        title: 'Полуфинал',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#ff7300',
        }
    }
    },
    ThirdPlace: {
      screen: ThirdPlace ,
      navigationOptions : {
        title: 'Третье Место',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#ff7300',
        }
    }
    },
    Final: {
      screen: Final ,
      navigationOptions : {
        title: 'Финал',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#ff7300',
        }
    }
    },
  }, {
    
});

