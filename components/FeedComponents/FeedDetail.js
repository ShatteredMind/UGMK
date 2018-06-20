import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';

class FeedDetail extends Component {
  
    render() {
        const { enclosure, description } = this.props.navigation.state.params
        var test = 'test.';
        var position = 14;
        var url = enclosure.link;
        var result = url.substr(0, position) + test + url.substr(position);
        desc = description.replace(/<(?:.|\n)*?>/gm, '');
        return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
        <Image
            source={{uri: result}}
            style={{ height:280 }}
        />
        <Text style={styles.flatListItem}>{desc} </Text>
        </View>
      );
    }
  }
  

const styles = StyleSheet.create({
    flatListItem: {
        color:'black',
        padding: 10,
        fontSize: 16,
    }
})

  export default FeedDetail;