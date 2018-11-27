import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';

import AllMoviesScreen from './allMovies'

const appId = "1047121222092614"

export default class ForgottenScreen extends Component {
  static navigationOptions = {
    title: 'EULA',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

            <Button
              buttonStyle={styles.loginButton}
              onPress={() =>
                navigate('AllMoviesScreen', { name: 'all movies' })
              }
              title="I agree"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}
