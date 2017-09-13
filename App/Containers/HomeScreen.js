import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import Tabbar from '../Components/TabBar'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
const menus = [
  {
    "name": '美食1',
    "icon": 'https://img.la/333/fff/60x60'
  },
  {
    "name": '美食2',
    "icon": 'https://img.la/333/fff/60x60'
  },
  {
    "name": '美食3',
    "icon": 'https://img.la/333/fff/60x60'
  },
  {
    "name": '美食4',
    "icon": 'https://img.la/333/fff/60x60'
  },
  {
    "name": '美食5',
    "icon": 'https://img.la/333/fff/60x60'
  },
  {
    "name": '美食6',
    "icon": 'https://img.la/333/fff/60x60'
  },
  {
    "name": '美食7',
    "icon": 'https://img.la/333/fff/60x60'
  },
  {
    "name": '美食8',
    "icon": 'https://img.la/333/fff/60x60'
  },

];
class HomeScreen extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView >
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.menuItemWrapper}>
              {
                menus.map(({name, icon},i)=>(
                  <TouchableOpacity style={styles.menuItem} key={`icon-${i}`}>
                    <Image source={{uri: icon}} style={styles.menuItemIcon}/>
                    <Text>{name}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <Tabbar navTo={navigate.bind(this)} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
