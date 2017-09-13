import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import Tabbar from '../Components/TabBar'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import homeAction from '../Redux/HomeRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
class HomeScreen extends Component {
  componentDidMount () {
    this.props.fetchData()
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView >
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.menuItemWrapper}>
              {
                this.props.initData.menus.map(({name, icon},i)=>(
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

const mapStateToProps = ({homeInitData}) => {
  return {
    initData: homeInitData.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(homeAction.homeRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
