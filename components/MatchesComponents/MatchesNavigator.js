    import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, ListView, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import data from './MatchesData'
import MatchesDetails from './MatchesDetails'
import { Provider } from 'react-redux'


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
            <Text style={{ color:'black', padding: 10, textAlign: 'center', fontSize: 16}} > {this.props.item.date} {this.props.item.arena_ru}, {this.props.item.region.name_ru}  </Text>
            <View style={{flex:1, flexDirection: 'row', backgroundColor: 'white', flexWrap: 'wrap'}}>
            <View>
            <Image
                source={require('../icons/nologo.jpg')}
                style={{ height:100, width: 80}}
            />
            <Text style={{textAlign: 'center', fontSize: 14}}>{this.props.item.team_a_ru} </Text>
            </View>
            <Text style={styles.flatListItem}>{this.props.item.score_a} : {this.props.item.score_b}</Text>
            <View>
            <Image
                source={require('../icons/nologo.jpg')}
                style={{ height:100, width: 80}}
            />
            <Text style={{textAlign: 'center', fontSize: 14}}>{this.props.item.team_b_ru}</Text>
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
    render() {
        return (
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
        marginTop: 20,
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
    render() {
        
        return (
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
        )
    }
}
class ThirdTab extends Component {
/*
    constructor(props) {
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
    render() {
        return (
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
        )
    }
}

const MatchesNavigator = TabNavigator({
    All: { 
        screen: FirstTab, 
        navigationOptions: {
            title: 'Все матчи'
        } },
    Premier: { screen: SecondTab,
        navigationOptions: {
            title: 'Премьер-Лига'
        }  },
    Euro: {screen: ThirdTab,
        navigationOptions: {
            title: 'Евро-Лига'
        }  }
},
{
    tabBarPosition: 'top',
    tabBarOptions : {
        style: {
            backgroundColor: '#ff7300'
        }
    }
})

export default MatchesNavigator;