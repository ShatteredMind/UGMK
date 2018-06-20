import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, ListView, Dimensions, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import data from './MatchesData'
import QuarterFinal from './QuarterFinal'
var ScrollingMenu = require('react-native-scrolling-menu');
import { NavigationActions } from 'react-navigation';

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
            <ScrollView>
                <View style={{height:40}}>
                <ScrollingMenu
                items={items}
                backgroundColor="#ffffff"
                callback={this.onClick.bind(this)}
                textColor="#cccccc"
                selectedTextColor="#000000"
                itemSpacing={20} />
                </View>
                <View style={{backgroundColor:'white'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold'}}>#      Команда</Text>
                        <Text style={{marginLeft:200, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>В/П  Очки</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold'}}>1</Text>
                        <Image source={require('../icons/dinamo.jpg')} style={{width:30, height:35, marginLeft: 15}}/>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold', fontSize: 14}}>Динамо Курс</Text>
                        <Text style={{marginLeft:133, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>20/0   40</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold'}}>2</Text>
                        <Image source={require('../icons/ugmk.jpg')} style={{width:30, height:35, marginLeft: 15}}/>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold', fontSize: 14}}>УГМК</Text>
                        <Text style={{marginLeft:175, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>16/4    32</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{marginLeft:15,marginTop:10, fontWeight: 'bold'}}>3</Text>
                        <Image source={require('../icons/usk.png')} style={{width:25, height:30, marginLeft: 15}}/>
                        <Text style={{marginLeft:20, marginTop:10, fontWeight: 'bold', fontSize: 14}}>УСК Прага</Text>
                        <Text style={{marginLeft:148, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>10/10  20</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{marginLeft:15,marginTop:10, fontWeight: 'bold'}}>4</Text>
                        <Image source={require('../icons/sopron.jpg')} style={{width:30, height:35, marginLeft: 15}}/>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold', fontSize: 14}}>Сопрон Баскет</Text>
                        <Text style={{marginLeft:125, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>8/12  16</Text>
                    </View>
                </View>
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
            </ScrollView>
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
            <ScrollView>
            <ScrollingMenu
            items={items}
            backgroundColor="#ffffff"
            callback={this.onClick.bind(this)}
            textColor="#cccccc"
            selectedTextColor="#000000"
            itemSpacing={20} />
            <View style={{backgroundColor:'white'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold'}}>#      Команда</Text>
                        <Text style={{marginLeft:200, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>В/П  Очки</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold'}}>1</Text>
                        <Image source={require('../icons/dinamo.jpg')} style={{width:30, height:35, marginLeft: 15}}/>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold', fontSize: 14}}>Динамо Курс</Text>
                        <Text style={{marginLeft:133, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>20/0   40</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold'}}>2</Text>
                        <Image source={require('../icons/ugmk.jpg')} style={{width:30, height:35, marginLeft: 15}}/>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold', fontSize: 14}}>УГМК</Text>
                        <Text style={{marginLeft:175, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>16/4    32</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{marginLeft:15,marginTop:10, fontWeight: 'bold'}}>3</Text>
                        <Image source={require('../icons/usk.png')} style={{width:25, height:30, marginLeft: 15}}/>
                        <Text style={{marginLeft:20, marginTop:10, fontWeight: 'bold', fontSize: 14}}>УСК Прага</Text>
                        <Text style={{marginLeft:148, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>10/10  20</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text style={{marginLeft:15,marginTop:10, fontWeight: 'bold'}}>4</Text>
                        <Image source={require('../icons/sopron.jpg')} style={{width:30, height:35, marginLeft: 15}}/>
                        <Text style={{marginLeft:15, marginTop:10, fontWeight: 'bold', fontSize: 14}}>Сопрон Баскет</Text>
                        <Text style={{marginLeft:125, marginTop:10, fontWeight: 'bold', textAlign: 'right'}}>8/12  16</Text>
                    </View>
                </View>
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
            </ScrollView>
        )
    }
}



const LeagueNavigator = TabNavigator({
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





export default LeagueNavigator;