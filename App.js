import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'; // 2.0.0-rc.9
import { FeedStack }  from './components/FeedComponents/Feed'
import { UserStack } from './components/TeamComponents/Team'
import { MatchesStack } from './components/MatchesComponents/MatchesStack'
import { SettingsStack } from './components/SettingsComponents/SettingsStack'
import { LeagueStack } from './components/LeagueComponents/LeagueStack'
import Team from './components/TeamComponents/Team'
import Icon from 'react-native-vector-icons/Ionicons';


/*
 * Styles related to our custom tab bar
 */
const activeTintColor = 'black';
const inactiveTintColor = 'white';
const styles = StyleSheet.create({
  tabBar: {
    height: 49,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .3)',
    backgroundColor: '#ff7300',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

class TabBar extends Component {
  renderItem = (route, index) => {
    const {
      navigation,
      jumpToIndex,
    } = this.props;

    const isCapture = route.routeName === 'Capture';

    const focused = index === navigation.state.index;
    const color = focused ? activeTintColor : inactiveTintColor;


    path = '';
    
    switch(route.routeName) {
      case 'News': path = require('./components/icons/News.png');
      break;
      case 'Team': path = require('./components/icons/Team.png');
      break;
      case 'League': path = require('./components/icons/League.png');
      break;
      case 'Settings': path = require('./components/icons/Settings.png');
      break;
      case 'Matches': path = require('./components/icons/Matches.png');
      break;
    }


    return (
      <TouchableWithoutFeedback
        key={route.key}
        style={styles.tab}
        onPress={() => isCapture ? navigation.navigate('CaptureModal') : jumpToIndex(index)}
      >
        <View style={styles.tab}>
          <Image source={path} style={{width:30, height:30, marginBottom: 10, tintColor: color}}/>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const {
      navigation,
    } = this.props;

    const {
      routes,
    } = navigation.state;

    return (
      <View style={styles.tabBar}>
        {routes && routes.map(this.renderItem)}
      </View>
    );
  }
}

/*
 * Simple component to render the screen, nothing fancy.
 */
const Screen = (props) => (
  <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
    <Text>{props.title} Screen</Text>
  </View>
);

/*
 * Here we actuall create our TabNavigator. As you can see we're not doing anything fancy.
 * To prevent an error I've simple passed a View to the Capture tab - this won't actually be seen
 * so make it as "cheap" as possible
 */
const Tabs = TabNavigator({
  News: {
    screen: FeedStack,
    navigationOptions : {
      tabBarIcon: ({ tintColor }) => {
        return (<Image
            style={{ width: 50, height: 50 }}
            source={require('./components/icons/News.png')}/>);}
    },
    tabBarOptions : {
      showIcon : true
    }
  },
  Matches: {
    screen: MatchesStack,
    navigationOptions : {
      tabBarIcon: () => {
        <Image source={require('./components/icons/Matches.png')}/>
      } 
    }
  },
  League: {
    screen: LeagueStack,
    navigationOptions : {
      tabBarIcon: () => {
        <Image source={require('./components/icons/League.png')}/>
      } 
    }
  },
  Team: {
    screen: UserStack,
    navigationOptions : {
      tabBarIcon: () => {
        <Image source={require('./components/icons/Team.png')}/>
      } 
    }
  },
  Settings: {
  screen: SettingsStack,
  navigationOptions : {
    tabBarIcon: () => {
      <Image source={require('./components/icons/Settings.png')}/>
    } 
  }
},
},
{
  tabBarComponent: TabBar,
  headerMode: 'none',        // I don't want a NavBar at top
  tabBarPosition: 'bottom',  // So your Android tabs go bottom
  tabBarOptions: {
    activeTintColor: 'red',  // Color of tab when pressed
    inactiveTintColor: 'red', // Color of tab when not pressed
    showIcon: true, // Shows an icon for both iOS and Android
    labelStyle: {
      fontSize: 11,
    },
  },
});

/*
 * Place the capture screen into a stack navigator so that we can easily use the existing header.
 * Why reinvent the wheel?
 */
const CaptureStack = StackNavigator({
  Capture: {
    screen: (props) => <Screen title="Capture" {...props} />,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Capture',
      headerLeft: (
        <Button
          title="Cancel"
          // Note that since we're going back to a different navigator (CaptureStack -> RootStack)
          // we need to pass `null` as an argument to goBack.
          onPress={() => navigation.goBack(null)}
        />
      ),
    }),
  },
})

/*
 * We need a root stack navigator with the mode set to modal so that we can open the capture screen
 * as a modal. Defaults to the Tabs navigator.
 */
const RootStack = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  CaptureModal: {
    screen: CaptureStack,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
}, {
  headerMode: 'none',
  mode: 'modal',
});

export default RootStack;