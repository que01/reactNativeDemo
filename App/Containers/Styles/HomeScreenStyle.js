import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  menuItemWrapper:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 1
  },
  menuItem: {
    flex: 1,
    minWidth: width/4,
    height: width/4 + 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  menuItemIcon: {
    height: (width/4)*0.8,
    width: (width/4)*0.8,
    borderRadius: (width/4)*0.4,
    marginBottom: 5
  }
})
