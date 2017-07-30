import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image, View} from 'react-native'
import MomentActions from '../Redux/MomentRedux'
import {Card, CardItem, Content, DeckSwiper, Icon, Spinner} from 'native-base'
// Styles
import styles from './Styles/DiscoverScreenStyle'
import {Metrics} from '../Themes'

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

  renderMoment(moment) {
    console.log('moment: ', moment)
    return (
      <Card>
        <CardItem>
          <Image resizeMode='cover' style={{height: Metrics.screenHeight, width: Metrics.screenWidth}}
                 source={{uri: moment.image}}/>
        </CardItem>
      </Card>
    )
  }

  render() {
    return (
      <Content>
        <View style={styles.mainContainer}>
          {(!this.props.loading && this.props.momentList.length > 0) && <DeckSwiper
            dataSource={this.props.momentList}
            renderItem={this.renderMoment.bind(this)}
          />}
        </View>
      </Content>
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
