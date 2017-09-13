import React from 'react'
import { StackNavigator } from 'react-navigation'
import MeInfoScreen from '../Containers/MeInfoScreen'
import OrderListScreen from '../Containers/OrderListScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MeInfoScreen: { screen: MeInfoScreen },
  OrderListScreen: { screen: OrderListScreen },
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen, navigationOptions: { header: null } }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'LaunchScreen',
  navigationOptions: ({navigation}) => {
    let {goBack, navigate} = navigation;
    return {
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitleStyle,
      headerLeft: <Icon name="chevron-left" onPress={()=>{goBack()}} size={24} color="#fff" style={{marginLeft: 20}} />,
      headerRight: <Icon name="home" onPress={()=>{navigate('HomeScreen')}} size={24} color="#fff" style={{marginRight: 20}} />,
    }
  }
})

export default PrimaryNav
