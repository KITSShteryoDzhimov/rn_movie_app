import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

import ForgottenScreen from './forgotten'
import EulaScreen from './eula'

const appId = "1047121222092614"

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Welcome to Movie App!</Text>
            <Text style={styles.userLabelText}>Email:

            </Text>
            <TextInput placeholder="me@abv.bg" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Text style={styles.passwordLabelText}>Password:

            </Text>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() =>
                navigate('EulaScreen', { name: 'Forget me not!' })
              }
              title="Login"
            />
            <Button
              buttonStyle={styles.forgotButton}
              title="Forgotten Password"
              onPress={() =>
                navigate('ForgottenScreen', { name: 'Forget me not!' })
              }
              color="#3897f1"
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

