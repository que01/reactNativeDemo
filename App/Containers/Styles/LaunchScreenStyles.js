import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  image: {
    width,
    height,
    flex: 1
  },
  imgTextWrapper: {
    flex: 1,
    // flexGrow:1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
    // backgroundColor: '#ccc'
  },
  imageText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 35,
    opacity: 0.8
  },
})
