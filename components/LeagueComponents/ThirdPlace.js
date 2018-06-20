import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, ListView, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import data from './ThirdPlaceData'
import QuarterFinal from './QuarterFinal'
var ScrollingMenu = require('react-native-scrolling-menu');

const resolution = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}


class FlatListItem extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
            }}>
            <Text style={{color: 'black', marginTop: 3, fontSize: 9, textAlign: 'center'}}>28 февраля 2018, 23:00</Text>
            <View style={{flex:1, flexDirection: 'row', backgroundColor: 'white', flexWrap: 'wrap'}}>
            <View>
            <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20, marginLeft: 10, color: 'black', width: 80}}>{this.props.item.team_a_ru} </Text>
            </View>
            <Image
                source={require('../icons/nologo.jpg')}
                style={{ height:40, width: 40, marginTop: 10}}
            />
            <Text style={styles.flatListItem}>{this.props.item.score_a} : {this.props.item.score_b}</Text>
            <Image
                source={require('../icons/nologo.jpg')}
                style={{ height:40, width: 40, marginTop: 10}}
            />
            <View>
            <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20, color: 'black', marginRight: 10, width: 80}}>{this.props.item.team_b_ru}</Text>
            </View>
            </View>
            </View>
        )
    }
}

class FirstTab extends Component {

  /*  constructor(props) {
        super(props);
    
        this.state = {
          data: {test: 'test'}
        };
    
        this.fetch_json();
      }
    
      fetch_json = async () => {
       const response = await fetch('http://178.211.172.239:8080/game/list_by_season?parentId=1193');
       const fetch_json = await response.json();
       this.setState({ data: fetch_json.data })
      }
      */
    onLearnMore = (item) => {
        this.props.navigation.navigate('MatchesDetails', {...item});
      };
    renderSeparator = () => {
        return (
            <View
              style={{
                height: 5,
                width: "86%",
                backgroundColor: "#F2F2F2",
              }}
            />
      );
    }

    resetNavigation(targetRoute) {
        const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
        NavigationActions.navigate({ routeName: targetRoute }),
        ],
        });
        this.props.navigation.dispatch(resetAction);
    }
    onClick(itemIndex) {
        if (itemIndex == 0)
        {
            this.props.navigation.navigate('LeagueTabs');
        }
        if (itemIndex == 1)
        {
            this.props.navigation.navigate('QuarterFinal');
        }
        if (itemIndex == 2)
        {
            this.props.navigation.navigate('SemiFinal');
        }
        if (itemIndex == 3)
        {
            this.props.navigation.navigate('ThirdPlace');
        }
        if (itemIndex == 4)
        {
            this.props.navigation.navigate('Final');
        }
    }
    render() {
        let items = ['Групповой Этап','1/4 финала','1/2 финала','3 место','Финал'];
        return (
            <View>
                <ScrollingMenu
                items={items}
                backgroundColor="#ffffff"
                callback={this.onClick.bind(this)}
                textColor="#cccccc"
                selectedTextColor="#000000"
                itemSpacing={20} />
            <FlatList
                    data = {data.data}
                    renderItem = {({item, index}) => {
                        return (
                        <TouchableOpacity
                        onPress={() => this.onLearnMore(item)}>   
                        <FlatListItem item={item} index={index}>
                        </FlatListItem>
                        </TouchableOpacity>
                        )
                    }}
                    ItemSeparatorComponent = {this.renderSeparator}
                    >
            </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color:'black',
        padding: 10,
        fontSize: 26,
        width: 50,
        flex: 1,
        textAlign: 'center',
        marginTop: 5,
    }
})

class SecondTab extends Component {

  /*  constructor(props) {
        super(props);
    
        this.state = {
            data: {test: 'test'}
          };
    
        this.fetch_json();
      }
    
      fetch_json = async () => {
       const response = await fetch('http://178.211.172.239:8080/game/list_by_season?parentId=1193');
       const fetch_json = await response.json();
       this.setState({ data: fetch_json.data })
      }
*/
    onLearnMore = (item) => {
        navigation.navigate('QuarterFinal', {...item});
      };
    renderSeparator = () => {
        return (
            <View
              style={{
                height: 5,
                width: "86%",
                backgroundColor: "#F2F2F2",
              }}
            />
      );
    }

    resetNavigation(targetRoute) {
        const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
        NavigationActions.navigate({ routeName: targetRoute }),
        ],
        });
        this.props.navigation.dispatch(resetAction);
    }
    onClick(itemIndex) {
        if (itemIndex == 0)
        {
            this.props.navigation.navigate('LeagueTabs');
        }
        if (itemIndex == 1)
        {
            this.props.navigation.navigate('QuarterFinal');
        }
        if (itemIndex == 2)
        {
            this.props.navigation.navigate('SemiFinal');
        }
        if (itemIndex == 3)
        {
            this.props.navigation.navigate('ThirdPlace');
        }
        if (itemIndex == 4)
        {
            this.props.navigation.navigate('Final');
        }
    }

    render() {
        let items = ['Групповой Этап','1/4 финала','1/2 финала','3 место','Финал'];
        return (
            <View>
            <ScrollingMenu
            items={items}
            backgroundColor="#ffffff"
            callback={this.onClick.bind(this)}
            textColor="#cccccc"
            selectedTextColor="#000000"
            itemSpacing={20} />
            <FlatList
                    data = {data.data}
                    renderItem = {({item, index}) => {
                        return (
                        <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this.onLearnMore(item)}>   
                        <FlatListItem item={item} index={index}>
                        </FlatListItem>
                        </TouchableOpacity>
                        )
                    }}
                    ItemSeparatorComponent = {this.renderSeparator}
                    >
            </FlatList>
            </View>
        )
    }
}



const ThirdPlace = TabNavigator({
    Euro: { 
        screen: FirstTab, 
        navigationOptions: {
            title: 'Евро'
        } },
    Premier: { 
        screen: SecondTab,
        navigationOptions: {
            title: 'Премьер-Лига'
        }  },
},
{
    tabBarPosition: 'top',
    tabBarOptions : {
        style: {
            backgroundColor: '#ff7300'
        }
    }
})

export default ThirdPlace;