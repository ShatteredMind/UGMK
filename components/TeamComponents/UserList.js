import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import { users } from './data';

var offense = [];
var defense = [];
var player = [];
var center = [];

class FlatListItem extends Component {

  render() {

      return (
          <View style={styles.container}>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{textAlign: 'left', marginTop: (resolution.height/20), marginLeft: 10, width: (resolution.width/18)}}>{this.props.item.number}</Text>
          <Image
              source={{uri: this.props.item.image_url}}
              style={{ height: (resolution.height/9), width: (resolution.width/6), marginLeft: 10, marginBottom: 5, marginTop: 5 }}
          />
          <Text style={{marginLeft: 15, fontWeight: 'bold', marginTop: 25, width: (resolution.width/2.8)}}>{this.props.item.name_ru}</Text>
          <Image source={require('../icons/flag.png')} style={{width: (resolution.width/12), height: (resolution.height/20), marginLeft:5, marginTop:20}}></Image>
          <Text style={{marginLeft: 15, marginTop: 25}}>{this.props.item.height}</Text>
          <Text style={{marginLeft: 15, marginTop: 25}}>{this.props.item.age}</Text>
          </View>
          <View style={{height:1, backgroundColor: '#f2f4f7', shadowColor: 'black', shadowOpacity: 1.0, shadowOffset: {width: 10, height: 10}}}></View>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    flatListItem: {
      color:'black',
      padding: 10,
      fontSize: 18,
      height: 100,
      textAlign: 'left',
      fontWeight: 'bold',
      marginTop: 15,
      marginLeft: 10,
      marginRight: 20,
      flexDirection: 'row',
      flex: 1,
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

const resolution = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
export default class UserList extends Component {


  constructor(props) {
    super(props);

    this.state = {
        data: {test: 'test'}
      };

      }
    /*
  fetch_json = async () => {
   const response = await fetch('http://178.211.172.239:8080/team/players?id=1195');
   const fetch_json = await response.json();
   this.setState({ data: fetch_json.data })
  }
*/

  onLearnMore = (item) => {
      this.props.navigation.navigate('TeamDetail', {...item});

    };
  renderSeparator = () => {
      return (
          <View
            style={{
              height: 1,
            }}
          />
    );
  }
  render () {

      return (
          <ScrollView>
            <View style={{height:50, backgroundColor: 'white', shadowColor: 'black', shadowOpacity: 1.0, shadowOffset: {width: 10, height: 10}}}>
               <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 15}}> Нападающие </Text>
            </View>
              <FlatList
                  data = {users.data}
                  renderItem = {({item, index}) => {
                    if (item.position == 'Нападающий')
                      {
                          return (
                      <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => this.onLearnMore(item)}>   
                      <FlatListItem item={item} index={index} key={index}>
                      </FlatListItem>
                      </TouchableOpacity>
                      )
                    }
                  }}
                  >
              </FlatList>
              <View style={{height:50, backgroundColor: 'white'}}>
               <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 15}}> Защитники </Text>
                </View>
              <FlatList
                  data = {users.data}
                  renderItem = {({item, index}) => {
                    if (item.position == 'Защитник')
                     { 
                         return (
                      <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => this.onLearnMore(item)}>   
                      <FlatListItem item={item} index={index} key={index}>
                      </FlatListItem>
                      </TouchableOpacity>
                      )
                    }
                  }}
                  >
              </FlatList>
              <View style={{height:50, backgroundColor: 'white'}}>
               <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 15}}> Центровые </Text>
            </View>

              <FlatList
                  data = {users.data}
                  renderItem = {({item, index}) => {
                    if (item.position == 'Центровой')
                      {
                          return (
                      <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => this.onLearnMore(item)}>   
                      <FlatListItem item={item} index={index} key={index}>
                      </FlatListItem>
                      </TouchableOpacity>
                      )
                    }
                  }}
                  >
              </FlatList>
              <View style={{height:50, backgroundColor: 'white'}}>
               <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginTop: 15}}> Разыгрывающие </Text>
            </View>
              <FlatList
                  data = {users.data}
                  renderItem = {({item, index}) => {
                    if (item.position == 'Разыгрывающий')
                      {
                          return (
                      <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => this.onLearnMore(item)}>   
                      <FlatListItem item={item} index={index} key={index}>
                      </FlatListItem>
                      </TouchableOpacity>
                      )              
                    }
                  }}
                  >
              </FlatList>
          </ScrollView>
      )
  }
}