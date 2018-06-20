import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Alert, ActivityIndicator } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
var Provider = require('react-redux');
import data from './sample'

var ready = false;


class FlatListItem extends Component {

    render() {
        var test = 'test.';
        var position = 14;
        var url = this.props.item.enclosure.link;
        var result = url.substr(0, position) + test + url.substr(position);
        return (
            <View style={styles.container}>
            <Image source={{uri: result}} style={{height: 260}}></Image>
            <Text style={styles.flatListItem}>{this.props.item.title} </Text>
            <View style={{flex: 1, marginBottom: 20, marginHorizontal: 20, flexDirection: 'row'}}>
            <Image source={require('../icons/clock.png')} style={{width:20, height:20, marginLeft: 10}}></Image>
            <Text style = {{marginHorizontal: 10, marginLeft: 10}}>
            {this.props.item.pubDate} 
            </Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color:'black',
        padding: 10,
        height: 60,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: 'white'
      }
})

export default class FeedList extends Component {

    state = {
        data : []
    };

    componentWillMount() {
        this.fetchRSS();
    }

    fetchRSS =  async ()  => {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=http://basket.test.ugmk.com/press/news/rss/');
        const dataSource = await response.json();
        this.setState({data: dataSource})
    };
    onLearnMore = (item) => {
        this.props.navigation.navigate('FeedDetails', {...item});
      };
    renderSeparator = () => {
        return (
            <View
              style={{
                height: 7,
                width: "86%",
                backgroundColor: "#EFEFF4",
              }}
            />
      );
    }
    render () {
        {
            return (
            <View style={{flex:1}}>
                <FlatList
                    data = {this.state.data.items}
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
}