import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, ListView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MatchesNavigator from './MatchesNavigator';
export default class MatchesList extends Component {
    render () {
        const { navigation } = this.props
        return (
            <View style={{flex:1}}>
                <MatchesNavigator navigation={navigation}/>
            </View>
        )
    }
}