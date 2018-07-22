import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import CaptureAndList from './components/CaptureAndList';
import ShowListings from './components/ShowListings';
import CameraScreen from './components/camera';
import ListScreen from './components/listScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import configureStore from './redux/store';


const store = configureStore();

export default class App extends React.Component {

  render() {
      const ListStack =  createStackNavigator(
          {
              CaptureAndList,
              CameraScreen,
              ListScreen,
          },
          {
              mode: 'modal'
          }
      );

      ListStack.navigationOptions = ({ navigation }) => {
          let tabBarVisible = true;
          if (navigation.state.index > 0) {
              tabBarVisible = false;
          }

          return {
              tabBarVisible,
          };
      };

      const MainNavigator =  createBottomTabNavigator(
          {
              List: ListStack,
              Listings: ShowListings,
          },
          {
              navigationOptions: ({navigation}) => ({
                  tabBarIcon: ({focused, tintColor}) => {
                      const {routeName} = navigation.state;
                      let iconName;
                      if (routeName === 'List') {
                          iconName = `ios-camera${focused ? '' : '-outline'}`;
                      } else if (routeName === 'Listings') {
                          iconName = `ios-list-box${focused ? '' : '-outline'}`;
                      }

                      // You can return any component that you like here! We usually use an
                      // icon component from react-native-vector-icons
                      return <Ionicons style={{marginTop:5}} name={iconName} size={35} color={tintColor}/>;
                  },
              }),
              tabBarOptions: {
                  activeTintColor: 'white',
                  inactiveTintColor: 'gray',
                  showLabel: false,
                  labelStyle: {
                      fontSize: 12,
                  },
                  style: {
                      height: 65,
                      backgroundColor: '#3B3C42',
                      shadowColor: "#000",
                      shadowOffset: {
                          width: 0,
                          height: 5,
                      },
                      shadowOpacity: 0.34,
                      shadowRadius: 6.27,

                      elevation: 10,
                  },
              },
          }
      );

    return (
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
    );
  }
}

