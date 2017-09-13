import React from 'react'
import { Text } from 'react-native'
import Tabs from 'react-native-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const styles = {
  textAlignCenter: {
    textAlign: 'center'
  }
}
const TabStyles = {}

class Tabbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: this.props.initTab || 'HomeScreen'
    }
  }
  onSelect (el) {
    if (el.props.name === this.state.page) {
      return false
    } else {
      this.setState({page: el.props.name})
      console.tron.log(el.props.name)
      this.props.navTo(el.props.name)
    }
  }
  render () {
    return (
      <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }} selectedStyle={{ color: '#4F8EF7' }} onSelect={this.onSelect.bind(this)}>
        <Text name='HomeScreen' style={styles.textAlignCenter} selectedIconStyle={TabStyles}>
          <Icon name='ios-book-outline' size={30} color='#000' />{'\n'}首页
        </Text>
        <Text name='OrderListScreen' style={styles.textAlignCenter} selectedIconStyle={TabStyles}>
          <Icon name='ios-paper-outline' size={30} color='#000' />{'\n'}订单
        </Text>
        <Text name='MeInfoScreen' style={styles.textAlignCenter} selectedIconStyle={TabStyles}>
          <Icon name='ios-person-outline' size={30} color='#000' />{'\n'}我的
        </Text>
      </Tabs>
    )
  }
}


export default Tabbar
