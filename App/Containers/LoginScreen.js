import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {NavigationActions} from "react-navigation"

// Styles
import styles from './Styles/LoginScreenStyle'
import AuthActions from '../Redux/AuthRedux'

class LoginScreen extends Component {

  componentDidMount() {
    this.props.authUser('waqqas.jabbar@gmail.com', 'password')
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn === true) {
      // we don't want user to go back to this screen
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: 'discover'})
        ]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.fetching,
    loggedIn: (state.auth.token !== null)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (email, password) => dispatch(AuthActions.authUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
