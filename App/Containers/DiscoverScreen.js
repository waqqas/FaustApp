import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import MomentActions from '../Redux/MomentRedux'

// Styles
import styles from './Styles/DiscoverScreenStyle'

class DiscoverScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>DiscoverScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
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
    getMomentList: () => dispatch(MomentActions.getMomentList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverScreen)
