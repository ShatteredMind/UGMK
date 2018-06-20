import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TabNavigator } from 'react-navigation'

class FirstTab extends Component {
    render() {
        return (
            <ScrollView>
                <Text>В разработке</Text>
            </ScrollView>
        )
    }
}

class SecondTab extends Component {
    render() {
        return (
            <ScrollView>
                <Text>В разработке</Text>
            </ScrollView>
        )
    }
}
class ThirdTab extends Component {
    render() {
        return (
            <ScrollView>
                <Text>В разработке</Text>
            </ScrollView>
        )
    }
}

const PlayerNavigator = TabNavigator({
    Профиль: { screen: FirstTab },
    Статистика: { screen: SecondTab },
    Фото: {screen: ThirdTab}
},
{
    tabBarPosition: 'top',
    tabBarOptions : {
        style: {
            backgroundColor: '#ff7300'
        }
    }
})

export default PlayerNavigator