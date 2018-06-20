import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';
import PlayerNavigator from './PlayerNavigator'
import { users } from './data';

class TeamDetails extends Component {
  
  render() {
    const {image_url, name_ru, number, position, height, weight } = this.props.navigation.state.params
    return (
        <View style={{flex: 1}}>
            <View style={{height: (styles.height/4), alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff7300'}}>
              <View style={{flexDirection: 'row', marginLeft: 60}}>
                  <Image source={{uri: image_url}} style={{height: 100, width: 80, paddingTop: 25}}/>
                  <Text style={{fontSize: 16, color: 'white', marginLeft: 40, marginTop: 40}}># {number}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', backgroundColor: '#ff7300', height: 30}}>
                <Text style={{fontSize: 14, color: 'white', marginLeft: 32 , marginTop: 10, textAlign: 'left'}}>{position}</Text>
                <Text style={{fontSize: 14, color: 'white', marginLeft: 70, marginTop: 10, textAlign: 'center'}}>Вес: {weight}</Text>
                <Text style={{fontSize: 14, color: 'white', marginLeft: 75, marginTop: 10, textAlign: 'right'}}>Рост: {height}</Text>
              </View>
            <PlayerNavigator/>
        </View>
    )
}
  }

  const styles = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    pictute : {
      height: 100,
      width: 80,
      marginLeft: 40,
    },
    position : {
      fontSize: 20,
      color: 'white',
      paddingLeft: 40,
    }
  }
  export default TeamDetails;