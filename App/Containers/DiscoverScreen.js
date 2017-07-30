import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image, View} from 'react-native'
import MomentActions from '../Redux/MomentRedux'
// Styles
import styles from './Styles/DiscoverScreenStyle'
import {Metrics} from '../Themes'
import Swiper from 'react-native-swiper'

class DiscoverScreen extends Component {

  componentDidMount() {
    this.onRefresh()
  }

  onRefresh() {
    this.props.resetMomentList()
    this.props.getMomentList()
  }

  onLogoPressed(moment) {

  }

  renderMoment(moment, i) {
    return (
      <View key={i + 1}>
        <Image resizeMode='cover' style={{height: Metrics.screenHeight, width: Metrics.screenWidth}}
               source={{uri: moment.image}}/>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          {this.props.momentList.map(this.renderMoment)}
        </Swiper>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.moment.loading,
    momentList: state.moment.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMomentList: () => dispatch(MomentActions.resetMomentList()),
    getMomentList: () => dispatch(MomentActions.getMomentList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverScreen)
