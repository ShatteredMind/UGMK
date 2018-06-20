import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, ListView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { LeagueNavigator } from './LeagueNavigator';
export default class LeagueList extends Component {
    render () {
        const { navigation } = this.props
        return (
            <View style={{flex:1}}>
                <LeagueNavigator navigation={navigation}/>
            </View>
        )
    }
}