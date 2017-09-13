import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'HomeScreen'})
  ]
})

// Styles
import styles from './Styles/LaunchScreenStyles'
const imgArr = {
  img1: require('../Images/launch1.png'),
  img2: require('../Images/launch2.png'),
  img3: require('../Images/launch3.png')
}
export default class LaunchScreen extends Component {
  render () {
    return (
      <Swiper style={styles.wrapper} loop={false} dotColor='#ccc'>
        <View style={styles.slide}>
          <Image source={imgArr.img1} style={styles.image}>
            <View style={styles.imgTextWrapper}>
              <Text style={styles.imageText}>1111</Text>
            </View>
          </Image>
        </View>
        <View style={styles.slide}>
          <Image source={imgArr.img2} style={styles.image}>
            <View style={styles.imgTextWrapper}>
              <Text style={styles.imageText}>22222</Text>
            </View>
          </Image>
        </View>
        <View style={styles.slide}>
          <Image source={imgArr.img3} style={styles.image}>
            <View style={styles.imgTextWrapper}>
              <Text style={styles.imageText}>33333</Text>
              <Text style={styles.button} onPress={()=>this.props.navigation.dispatch(resetAction)}>enjoy youself!</Text>
            </View>
          </Image>
        </View>
      </Swiper>
    )
  }
}
